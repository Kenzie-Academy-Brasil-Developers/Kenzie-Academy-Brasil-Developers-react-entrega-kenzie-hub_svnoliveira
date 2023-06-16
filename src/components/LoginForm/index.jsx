import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { Input } from "../Fragments/Input"
import { formSchema } from "./formSchema"
import { useRef, useState } from "react"
import { atemptLogin } from "../../services/requests"
import { Loading } from "../Fragments/Loading"
import { Message } from "../Fragments/Message"
import { Button } from "../../globalStyles/Buttons/Button"
import { StyledForm } from "../../globalStyles/Forms/Form"
import { Title1 } from "../../globalStyles/Typography/Title1"
import { HeadlineBold } from "../../globalStyles/Typography/HeadlineBold"
import { SectionEnd } from "../../globalStyles/SectionEnd"

export const LoginForm = ({ setUser }) => {
    const [isLoadingLogin, setIsLoadingLogin] = useState(false)
    const [isMessageLogin, setIsMessageLogin] = useState("")
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
    })

    const submit = async (formData) => {
        setIsLoadingLogin(true)
        const result = await atemptLogin(formData)
        setIsMessageLogin(result? "Login feito com sucesso" : "Não foi possível fazer o Login")
        setTimeout(() => {
            setIsLoadingLogin(false)
            setIsMessageLogin("")
            if (result){
                setUser(result.user)
                localStorage.setItem("@TOKEN", JSON.stringify(result.token))
                localStorage.setItem("@USERID", JSON.stringify(result.user.id))
                navigate("/home")
            }
        }, "4000")
    }

    if (isLoadingLogin){
        return (
            <>
            <Loading />
            {isMessageLogin? <Message message={isMessageLogin}/>: null}
            </>
        )
    }

    const isObjEmpty = (object) => {
        return Object.keys(object).length === 0
    }

    return (
        <StyledForm onSubmit={handleSubmit(submit)} noValidate>
            <Title1>Login</Title1>

            <Input  register={register} errors={errors} label="Email" saveTag="email" 
            type="email" id="login-email" placeholder="exemplo@email.com"/>

            <Input register={register} errors={errors} label="Senha" saveTag="password"
            type="password" id="login-password" placeholder="Senha" />

            <Button color={ isObjEmpty(errors)? "primary":"disabled"} 
            type="submit">Entrar</Button>

            <HeadlineBold>Ainda não possui uma conta?</HeadlineBold>
            
            <Button color="grey" type="button" ><Link to="/register">Cadastre-se</Link></Button>
            <SectionEnd />
        </StyledForm>
    )
}