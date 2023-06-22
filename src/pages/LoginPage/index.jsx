import { LoginForm } from "../../components/LoginForm"
import { Navbar } from "../../components/Navbar"

export const LoginPage = () => {
    return (
        <>
            <Navbar position="center"/>
            <main>
                <LoginForm />
            </main>
        </>
    )
}