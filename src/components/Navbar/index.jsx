import logo from "../../assets/Logo.svg"
import { StyledNavContainer } from "./style"

export const Navbar = ({children, position}) => {
    return (
        <nav>
            <StyledNavContainer position={position}>
                <img src={logo} alt="Logo Kenzie hub, letras escritas em rosa" />
                {children}
            </StyledNavContainer>
        </nav>
    )
}