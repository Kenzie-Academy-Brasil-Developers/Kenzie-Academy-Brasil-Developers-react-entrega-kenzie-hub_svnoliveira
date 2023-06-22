import { useContext, useEffect, useRef } from "react"
import { TechnologiesContext } from "../../providers/TechnologiesContext"
import { TechnologyEditForm } from "../TechnologyEditForm"
import { ModalController } from "../../globalStyles/Modals/Modal"


export const TechnologyEditModal = () => {

    const { setIsEditModal } = useContext(TechnologiesContext)
    const editModalRef = useRef(null)

    useEffect(()=> {
        const handleOutEditClick = (event) => {
            if (!editModalRef.current?.contains(event.target)){
                setIsEditModal(false)
            }
        }

        window.addEventListener("mousedown", handleOutEditClick)
        return () => {
            window.removeEventListener("mousedown", handleOutEditClick)
        }
    },[])

    useEffect(()=> {
        const handleEditClickClose = (event) => {
            if (event.key === "Escape") {
                editModalRef.current? setIsEditModal(false) : null
            }
        }

        window.addEventListener("keydown", handleEditClickClose)
        return () => {
            window.removeEventListener("keydown", handleEditClickClose)
        }
    })

    return (
        <ModalController role="dialog">
            <div ref={editModalRef}>
                <div>
                    <h2>Tecnologia Detalhes</h2>
                    <button onClick={() => { setIsEditModal(false) }}>x</button>
                </div>
                <TechnologyEditForm />
            </div>
        </ModalController>
    )
}