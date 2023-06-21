import { createContext, useState } from "react";

export const TechnologiesContext = createContext({})

export const TechnologiesProvider = ({children}) => {

    const [ technologyList, setTechnologyList ] = useState([])
    const [ isModal, setIsModal ] = useState(false)

    return(
        <TechnologiesContext.Provider value={{ technologyList, setTechnologyList, isModal, setIsModal }}>
            {children}
        </TechnologiesContext.Provider>
    )
}