import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Select } from "../Fragments/Select"
import { Input } from "../Fragments/Input"
import { formSchemaRegister } from "./formSchema"
import { Loading } from "../Fragments/Loading"
import { useState } from "react"
import { atemptRegistration } from "../../services/requests"
import { Message } from "../Fragments/Message"
import { useNavigate } from "react-router-dom"
import { Button } from "../../globalStyles/Buttons/Button"
import { StyledForm } from "../../globalStyles/Forms/Form"
import { Title1 } from "../../globalStyles/Typography/Title1"
import { Headline } from "../../globalStyles/Typography/Headline"
import { SectionEnd } from "../../globalStyles/SectionEnd"

export const RegisterForm = () => {
    const [isLoadingRegister, setIsLoadingRegister] = useState(false)
    const [isMessage, setIsMessage] =useState("")
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchemaRegister),
    })

    const submit = async (formData) => {
        setIsLoadingRegister(true)
        const result = await atemptRegistration(formData)
        setIsMessage(result? "Conta criada com sucesso!": "Ops! Algo deu errado")
        setTimeout(() => {
            setIsLoadingRegister(false)
            setIsMessage("")
            result? navigate("/login") : null
        }, "2000")
    }

    if (isLoadingRegister){
        return (
            <>
            <Loading />
            {isMessage? <Message message={isMessage}/> : null}
            </>
        )
    }

    const isObjEmpty = (object) => {
        return Object.keys(object).length === 0
    }

    return (
        <StyledForm onSubmit={handleSubmit(submit)} noValidate>
            
            <Title1>Crie sua conta</Title1>
            <Headline>Rapido e grátis, vamos nessa</Headline>
            
            <Input register={register} errors={errors} label="Nome" saveTag="name"
            type="text" id="Register-name" placeholder="Digite aqui seu nome" />

            <Input register={register} errors={errors} label="Email" saveTag="email"
            type="email" id="Register-email" placeholder="Digite aqui seu email" />

            <Input register={register} errors={errors} label="Senha" saveTag="password"
            type="text" id="Register-password" placeholder="Digite aqui sua senha" />

            <Input register={register} errors={errors} label="Confirmar Senha" saveTag="passwordConfirm"
            type="text" id="Register-password-confirm" placeholder="Digite novamente sua senha" />

            <Input register={register} errors={errors} label="Bio" saveTag="bio"
            type="text" id="Register-bio" placeholder="Fale sobre você" />

            <Input register={register} errors={errors} label="Contato" saveTag="contact"
            type="text" id="Register-contact" placeholder="Opção de contato" />

           <Select register={register} errors={errors} />

           <Button color={ isObjEmpty(errors)? "primary":"disabled"} 
            type="submit">Cadastrar</Button>
            <SectionEnd />
        </StyledForm>
    )
}