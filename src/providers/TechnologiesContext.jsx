import { createContext, useContext, useState } from "react";
import { UserContext } from "../providers/UsersContext"
import { atemptTechEdit, atemptTechRegistration, atemptTechRemoval } from "../services/requests";

export const TechnologiesContext = createContext({})

export const TechnologiesProvider = ({ children }) => {
    const { token, isLoading, setIsLoading, isMessage, setIsMessage } = useContext(UserContext)

    const [technologyList, setTechnologyList] = useState([])
    const [isModal, setIsModal] = useState(false)
    const [isEditModal, setIsEditModal] = useState(false)
    const [clickedCard, setClickedCard] = useState("")

    //register technology
    const submitRegistration = async (formData) => {
        setIsLoading(true)
        const result = await atemptTechRegistration(token, formData)
        if (result) {
            setIsMessage("Tecnologia cadastrada")
            setTechnologyList((technologyList) => [...technologyList, result])
        } else {

            setIsMessage("Tecnologia já cadastrada")
        }
        setIsLoading(false)
        setTimeout(() => {
            setIsMessage("")
        }, "2000")
    }


    //edit technology
    const handleCardClick = (cardId) => {

        setIsEditModal(true)
        setClickedCard(cardId)
    }

    const getCurrentTechNameById = (id) => {

        let techName = ""
        technologyList.map(tech => {
            if (tech.id === id) {
                techName = tech.title
            }
        })
        return techName
    }

    const submitEdit = async (formData) => {
        setIsLoading(true)
        const result = await atemptTechEdit(token, clickedCard, formData.status)
        if (result) {
            setIsMessage("Status modificado")
            const newList = technologyList.map((tech) => {
                if (tech.id === clickedCard) {
                    return {
                        ...tech,
                        status: formData.status
                    }
                }
                return tech
            })
            setTechnologyList(newList)
        } else {

            setIsMessage("Erro ao modificar o status")
        }
        setIsLoading(false)
        setIsEditModal(false)
        setTimeout(() => {
            setIsMessage("")
        }, "2000")
    }

    const handleRemoveButton = async () => {
        const result = await atemptTechRemoval( token, clickedCard)

        if (result){
            setIsEditModal(false)
            setTechnologyList(technologyList.filter(currentTech => currentTech.id !== clickedCard))
            setIsMessage("Excluído com sucesso")
            setTimeout(() => {
                setIsMessage("")
            }, 1000);
        }
    }

    return (
        <TechnologiesContext.Provider value={{
            technologyList, setTechnologyList, isModal,
            setIsModal, submitRegistration, isLoading,
            isMessage, isEditModal, setIsEditModal,
            clickedCard, setClickedCard, handleCardClick,
            getCurrentTechNameById, submitEdit, handleRemoveButton
        }}>

            {children}

        </TechnologiesContext.Provider>
    )
}