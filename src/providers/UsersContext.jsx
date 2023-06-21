import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { atemptLogin, atemptRegistration } from "../services/requests";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isMessage, setIsMessage] = useState("")

    const navigate = useNavigate()

    //register

    const submitRegistration = async (formData) => {
        setIsLoading(true)
        const result = await atemptRegistration(formData)
        setIsMessage(result? "Conta criada com sucesso!": "Ops! Algo deu errado")
        setTimeout(() => {
            setIsLoading(false)
            setIsMessage("")
            result? navigate("/login") : null
        }, "2000")
    }
    
    //login
    
    const submitLogin = async (formData) => {
        setIsLoading(true)
        const result = await atemptLogin(formData)
        setIsMessage(result? "Login feito com sucesso" : "Não foi possível fazer o Login")
        setIsLoading(false)
        if (result){
            setUser(result.user)
            localStorage.setItem("@TOKEN", JSON.stringify(result.token))
            localStorage.setItem("@USERID", JSON.stringify(result.user.id))
            navigate("/home")
        }
        setTimeout(() => {
            setIsMessage("")
        }, "2000")
    }

    //logout

    const handleLogout = () => {
        setUser(null)
        localStorage.clear()
        navigate("/login")
    }

    return(
        <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading, isMessage, submitLogin, handleLogout, submitRegistration, navigate }}>
            {children}
        </UserContext.Provider>
    )
}