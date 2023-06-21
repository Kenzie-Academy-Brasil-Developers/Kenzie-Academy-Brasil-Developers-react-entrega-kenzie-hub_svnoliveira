import { Header } from "../../components/Header"
import { Navbar } from "../../components/Navbar"
import { Button } from "../../globalStyles/Buttons/Button"
import { StyledDashboard } from "./style"
import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/UsersContext"
import { Message } from "../../components/Fragments/Message"
import { TechnologyList } from "../../components/TechnologyList"

export const HomePage = () => {
    const { isMessage, handleLogout, navigate } = useContext(UserContext)

    useEffect(() => {
        if (!localStorage.getItem("@USERID")) {
            navigate("/login")
        }
    }, [])

    return (
        <>
            <StyledDashboard id="dashboard">
                <Navbar>
                    <Button color="black" type="button" onClick={handleLogout}>Sair</Button>
                </Navbar>
                <section>
                    <Header />
                </section>
                <main>
                    <TechnologyList />
                </main>
            </StyledDashboard>
            {isMessage ? <Message /> : null}
        </>
    )
}