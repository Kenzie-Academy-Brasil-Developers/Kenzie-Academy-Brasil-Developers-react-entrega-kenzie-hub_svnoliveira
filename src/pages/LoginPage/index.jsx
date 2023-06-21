import { LoginForm } from "../../components/LoginForm"
import { useContext, useEffect } from "react"
import { Navbar } from "../../components/Navbar"
import { UserContext } from "../../providers/UsersContext"

export const LoginPage = () => {
    
    const { navigate } = useContext(UserContext)

    useEffect(() => {
        if (localStorage.getItem("@USERID")) {
            navigate("/home")
        }
    }, [])

    return (
        <>
            <Navbar position="center"/>
            <main>
                <LoginForm />
            </main>
        </>
    )
}