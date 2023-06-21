import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchemaLogin } from "./formSchema"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { Input } from "../Fragments/Input"
import { Loading } from "../Fragments/Loading"
import { Message } from "../Fragments/Message"
import { Button } from "../../globalStyles/Buttons/Button"
import { StyledForm } from "../../globalStyles/Forms/Form"
import { Title1 } from "../../globalStyles/Typography/Title1"
import { HeadlineBold } from "../../globalStyles/Typography/HeadlineBold"
import { SectionEnd } from "../../globalStyles/SectionEnd"
import { UserContext } from "../../providers/UsersContext"
import { isObjEmpty } from "../../services/utilities"

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchemaLogin),
    })

    const { submitLogin, isLoading, isMessage } = useContext(UserContext)

    return (
        <>
        {isLoading? <Loading /> :
        <StyledForm onSubmit={handleSubmit(submitLogin)} noValidate>
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
        </StyledForm>}
        {isMessage? <Message />: null}
        </>
    )
}