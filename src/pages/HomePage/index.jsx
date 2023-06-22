import { Header } from "../../components/Header"
import { Navbar } from "../../components/Navbar"
import { Button } from "../../globalStyles/Buttons/Button"
import { StyledDashboard } from "./style"
import { useContext } from "react"
import { UserContext } from "../../providers/UsersContext"
import { Message } from "../../components/Fragments/Message"
import { TechnologyList } from "../../components/TechnologyList"

export const HomePage = () => {
    const { isMessage, handleLogout } = useContext(UserContext)

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