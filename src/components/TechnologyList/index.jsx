import { useContext, useEffect, useState } from "react"
import { Button } from "../../globalStyles/Buttons/Button"
import { Title1 } from "../../globalStyles/Typography/Title1"
import { UserContext } from "../../providers/UsersContext"
import { getTechnologiesByID } from "../../services/requests"
import { Loading } from "../Fragments/Loading"
import { TechnologiesContext } from "../../providers/TechnologiesContext"
import { TechnologyRegisterModal } from "../TechnologyRegisterModal"

export const TechnologyList = () => {

    const { technologyList, setTechnologyList, setIsModal, isModal } = useContext(TechnologiesContext)
    const { user, setIsLoading, isLoading } = useContext(UserContext)

    useEffect(() => {
        const getTechnologyList = async () => {
            setIsLoading(true)
            const newList = await getTechnologiesByID(user.id)
            setIsLoading(false)
            setTechnologyList(newList)
        }
        getTechnologyList()
    }, [])

    return (
        <section>
            <header>
                <Title1>Tecnologias</Title1>
                <Button color="black" onClick={() => {setIsModal(true)}}>+</Button>
            </header>
            <ul>
                {console.log(technologyList)}
                {isLoading ? <Loading /> :
                    technologyList.length === 0 ? <h1>Nenhuma Tecnologia cadastrada</h1> :
                        technologyList.map(({ id, title, status }) => {
                            return (
                                <li key={id}>
                                    <h2>{title}</h2>
                                    <span>{status}</span>
                                </li>
                            )
                        }
                    )
                }
            </ul>
            { isModal? <TechnologyRegisterModal /> : null }
        </section>
    )
}