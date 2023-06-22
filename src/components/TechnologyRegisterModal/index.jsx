import { useContext, useEffect, useRef } from "react"
import { TechnologiesContext } from "../../providers/TechnologiesContext"
import { TechnologyRegisterForm } from "../TechnologyRegisterForm"
import { ModalController } from "../../globalStyles/Modals/Modal"
import { Title3 } from "../../globalStyles/Typography/Title3"


export const TechnologyRegisterModal = () => {

    const { setIsModal } = useContext(TechnologiesContext)
    const modalRef = useRef(null)

    useEffect(()=> {
        const handleOutClick = (event) => {
            if (!modalRef.current?.contains(event.target)){
                setIsModal(false)
            }
        }

        window.addEventListener("mousedown", handleOutClick)
        return () => {
            window.removeEventListener("mousedown", handleOutClick)
        }
    },[])

    useEffect(()=> {
        const handleClickClose = (event) => {
            if (event.key === "Escape") {
                modalRef.current? setIsModal(false) : null
            }
        }

        window.addEventListener("keydown", handleClickClose)
        return () => {
            window.removeEventListener("keydown", handleClickClose)
        }
    })

    return (
        <ModalController role="dialog">
            <div ref={modalRef}>
                <div className="modal-header">
                    <Title3>Cadastrar Tecnologia</Title3>
                    <button onClick={() => { setIsModal(false) }}>X</button>
                </div>
                <TechnologyRegisterForm />
            </div>
        </ModalController>
    )
}