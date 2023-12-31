import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"
import { Navbar } from "../../components/Navbar"
import { Button } from "../../globalStyles/Buttons/Button"

export const RegisterPage = () => {

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
