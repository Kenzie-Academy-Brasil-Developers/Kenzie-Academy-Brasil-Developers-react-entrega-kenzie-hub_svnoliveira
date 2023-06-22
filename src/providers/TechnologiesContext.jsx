import { createContext, useContext, useState } from "react";
import { UserContext } from "../providers/UsersContext"
import { atemptTechRegistration } from "../services/requests";

export const TechnologiesContext = createContext({})

export const TechnologiesProvider = ({children}) => {
    const { token, isLoading, setIsLoading, isMessage, setIsMessage } = useContext(UserContext)

    const [ technologyList, setTechnologyList ] = useState([])
    const [ isModal, setIsModal ] = useState(false)

    const submitRegistration = async (formData) => {
        setIsLoading(true)
        const result = await atemptTechRegistration( token, formData )
        if (result){
            setIsMessage("Tecnologia cadastrada")
            setTechnologyList((technologyList) => [...technologyList, result] )
        }else {

            setIsMessage("Tecnologia já cadastrada")
        }
        setIsLoading(false)
        setTimeout(()=> {
            setIsMessage("")
        }, "2000")
    }

    return(
        <TechnologiesContext.Provider value={{ technologyList, setTechnologyList, isModal, setIsModal, submitRegistration, isLoading, isMessage }}>
            {children}
        </TechnologiesContext.Provider>
    )
}