import { Header } from "../../components/Header"
import { Navbar } from "../../components/Navbar"
import { useNavigate } from "react-router-dom"
import { Button } from "../../globalStyles/Buttons/Button"
import { StyledDashboard } from "./style"
import { Title1 } from "../../globalStyles/Typography/Title1"
import { Title2 } from "../../globalStyles/Typography/Title2"
import { useEffect } from "react"

export const HomePage = ({ user, setUser }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        setUser(null)
        localStorage.clear()
        navigate("/login")
    }

    useEffect(() => {
        if (!localStorage.getItem("@USERID")) {
            navigate("/login")
        }
    }, [])

    return (
        <StyledDashboard id="dashboard">
            <Navbar>
                <Button color="black" type="button" onClick={handleLogout}>Sair</Button>
            </Navbar>
            <section>
                <Header user={user} />
            </section>
            <main>
                <div>
                    <Title1>Que pena! Estamos em desenvolvimento :{"("}</Title1>
                    <Title2>Nossa aplicação está em desenvolvimento, em breve teremos novidades</Title2>
                </div>
            </main>
        </StyledDashboard>
    )
}