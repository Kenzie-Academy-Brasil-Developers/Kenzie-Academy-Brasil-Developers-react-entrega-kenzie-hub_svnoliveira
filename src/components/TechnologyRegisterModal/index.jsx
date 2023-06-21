import { useContext, useEffect, useRef } from "react"
import { TechnologiesContext } from "../../providers/TechnologiesContext"
import { Input } from "../Fragments/Input"

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
        <div role="dialog">
            <div ref={modalRef}>
                <div>
                <h2>Cadastrar Tecnologia</h2>
                <button onClick={() => {setIsModal(false)}}>x</button>
                </div>
                <Input />
            </div>
        </div>
    )
}