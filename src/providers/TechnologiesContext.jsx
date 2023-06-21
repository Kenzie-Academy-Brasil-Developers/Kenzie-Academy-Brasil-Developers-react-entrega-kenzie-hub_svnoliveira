import { createContext, useState } from "react";

export const TechnologiesContext = createContext({})

export const TechnologiesProvider = ({children}) => {

    const [technologyList, setTechnologyList] = useState([])

    return(
        <TechnologiesContext.Provider value={{ technologyList, setTechnologyList }}>
            {children}
        </TechnologiesContext.Provider>
    )
}