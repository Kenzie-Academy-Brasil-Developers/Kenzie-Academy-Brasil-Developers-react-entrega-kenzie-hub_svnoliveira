import { useNavigate } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm"
import { useEffect } from "react"
import { Navbar } from "../../components/Navbar"

export const LoginPage = ({setUser}) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("@USERID")) {
            navigate("/home")
        }
    }, [])

    return (
        <>
            <Navbar position="center"/>
            <main>
                <LoginForm setUser={setUser} />
            </main>
        </>
    )
}