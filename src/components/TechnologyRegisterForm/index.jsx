import { useForm } from "react-hook-form"
import { Button } from "../../globalStyles/Buttons/Button"
import { StyledForm } from "../../globalStyles/Forms/Form"
import { Input } from "../Fragments/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchemaTechRegister } from "./formSchema"
import { useContext } from "react"
import { TechnologiesContext } from "../../providers/TechnologiesContext"
import { isObjEmpty } from "../../services/utilities"
import { SelectStatus } from "../Fragments/SelectStatus"
import { Loading } from "../Fragments/Loading"

export const TechnologyRegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchemaTechRegister)
    })

    const { submitRegistration, isLoading } = useContext(TechnologiesContext)

    return (
        <>
            {isLoading ? <Loading /> :
                <StyledForm onSubmit={handleSubmit(submitRegistration)} noValidate>

                    <Input register={register} errors={errors} label="Nome" saveTag="title"
                        type="text" id="tech-register-name" placeholder="Digite o nome da tecnologia" />

                    <SelectStatus register={register} errors={errors} />

                    <Button color={isObjEmpty(errors) ? "primary" : "disabled"}
                        type="submit">Cadastrar Tecnologia</Button>

                </StyledForm>}
        </>
    )
}