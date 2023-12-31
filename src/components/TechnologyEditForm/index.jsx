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

    const { submitEdit, isLoading, getCurrentTechNameById, 
        clickedCard, handleRemoveButton } = useContext(TechnologiesContext)

    return (
        <>
            {isLoading ? <Loading /> :
                <StyledForm onSubmit={handleSubmit(submitEdit)} noValidate>

                    <Input register={register} errors={errors} label="Nome" saveTag="title" disabled
                        type="text" id="tech-register-name" value={getCurrentTechNameById(clickedCard)} />

                    <SelectStatus register={register} errors={errors} />

                    <div>
                        <Button color={isObjEmpty(errors) ? "primary" : "disabled"}
                            type="submit">Salvar Alterações</Button>
                        <Button type="button" color="grey" onClick={handleRemoveButton}>Excluir</Button>

                    </div>

                </StyledForm>}
        </>
    )
}