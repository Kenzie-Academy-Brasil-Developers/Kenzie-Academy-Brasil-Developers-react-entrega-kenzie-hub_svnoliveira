import { Link, useNavigate } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"
import { useEffect } from "react"
import { Navbar } from "../../components/Navbar"
import { Button } from "../../globalStyles/Buttons/Button"


export const RegisterPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("@USERID")) {
            navigate("/home")
        }
    }, [])

    return (
        <>
            <Navbar>
                <Button color="black" type="button"><Link to={"/login"}>Voltar</Link></Button>
            </Navbar>
            <main>
                <RegisterForm />
            </main>
        </>
    )
}
