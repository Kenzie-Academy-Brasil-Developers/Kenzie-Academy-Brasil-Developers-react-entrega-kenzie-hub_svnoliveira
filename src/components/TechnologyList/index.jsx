import { useContext } from "react"
import { Button } from "../../globalStyles/Buttons/Button"
import { Title1 } from "../../globalStyles/Typography/Title1"
import { UserContext } from "../../providers/UsersContext"
import { Loading } from "../Fragments/Loading"
import { TechnologiesContext } from "../../providers/TechnologiesContext"
import { TechnologyRegisterModal } from "../TechnologyRegisterModal"
import { TechnologyEditModal } from "../TechnologyEditModal"
import { TechnologyCard } from "./style"

export const TechnologyList = () => {
    
    const { 
        setIsModal, isModal, isEditModal, handleCardClick
    } = useContext(TechnologiesContext)

    const { isLoading, technologyList } = useContext(UserContext)


    return (
        <section>
            <header>
                <Title1>Tecnologias</Title1>
                <Button color="black" onClick={() => {setIsModal(true)}}>+</Button>
            </header>
            <ul>
                {isLoading ? <Loading /> :
                    technologyList.length === 0 ? <h1>Nenhuma Tecnologia cadastrada</h1> :
                        technologyList.map(({ id, title, status }) => {
                            return (
                                <TechnologyCard key={id} onClick={() => {handleCardClick(id)}} >
                                    <h2>{title}</h2>
                                    <span>{status}</span>
                                </TechnologyCard>
                            )
                        }
                    )
                }
            </ul>
            { isModal? <TechnologyRegisterModal /> : null }
            { isEditModal? <TechnologyEditModal /> : null }
        </section>
    )
}