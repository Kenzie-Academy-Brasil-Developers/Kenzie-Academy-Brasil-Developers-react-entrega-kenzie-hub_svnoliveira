import { useContext } from "react"
import { StyledMessage } from "./style"
import { Title3 } from "../../../globalStyles/Typography/Title3"
import { UserContext } from "../../../providers/UsersContext"

export const Message = () => {
    const { isMessage } = useContext(UserContext)
    
    return(
        <StyledMessage message={isMessage}>
            <div>
                <img src="">
                </img>
                <Title3>{isMessage}</Title3>
            </div>
            <div></div>
        </StyledMessage>
    )
}