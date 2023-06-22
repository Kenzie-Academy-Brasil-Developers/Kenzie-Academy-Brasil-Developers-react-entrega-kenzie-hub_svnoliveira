import { DashboardCard } from "../../globalStyles/Cards/DashboardCard"
import { StyledHeaderContainer } from "./style"
import { Title1 } from "../../globalStyles/Typography/Title1"
import { HeadlineBold } from "../../globalStyles/Typography/HeadlineBold"
import { useContext } from "react"
import { UserContext } from "../../providers/UsersContext"

export const Header = () => {

    const { user } = useContext(UserContext)


    return (
        <header>
            <StyledHeaderContainer>
                <DashboardCard>
                    <Title1>Olá, {user ? user.name : "nome"}</Title1>
                </DashboardCard>
                <DashboardCard>
                    <HeadlineBold>{user ? user.course_module : "modulo teste"}</HeadlineBold>
                </DashboardCard>
            </StyledHeaderContainer>
        </header>
    )
}