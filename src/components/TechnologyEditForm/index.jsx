import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechnologiesContext } from "../../providers/TechnologiesContext"
import { Loading } from "../Fragments/Loading"
import { StyledForm } from "../../globalStyles/Forms/Form"
import { Input } from "../Fragments/Input"
import { SelectStatus } from "../Fragments/SelectStatus"
import { Button } from "../../globalStyles/Buttons/Button"
import { formSchemaTechEdit } from "./formSchema"
import { isObjEmpty } from "../../services/utilities"

export const TechnologyEditForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchemaTechEdit)
    })

    const { submitEdit, isLoading, getCurrentTechNameById, clickedCard } = useContext(TechnologiesContext)

    return (
        <>
         {isLoading ? <Loading /> :
                <StyledForm onSubmit={handleSubmit(submitEdit)} noValidate>

                    <Input register={register} errors={errors} label="Nome" saveTag="title"
                        type="text" id="tech-register-name" placeholder={getCurrentTechNameById(clickedCard)} />

                    <SelectStatus register={register} errors={errors} />

                    <Button color={isObjEmpty(errors) ? "primary" : "disabled"}
                        type="submit">Cadastrar Tecnologia</Button>

                </StyledForm>}
        </>
    )
}