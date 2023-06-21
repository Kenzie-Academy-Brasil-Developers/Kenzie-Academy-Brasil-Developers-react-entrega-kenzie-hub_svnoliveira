import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"
import { useContext, useEffect } from "react"
import { Navbar } from "../../components/Navbar"
import { Button } from "../../globalStyles/Buttons/Button"
import { UserContext } from "../../providers/UsersContext"


export const RegisterPage = () => {
    
    const { navigate } = useContext(UserContext)

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
