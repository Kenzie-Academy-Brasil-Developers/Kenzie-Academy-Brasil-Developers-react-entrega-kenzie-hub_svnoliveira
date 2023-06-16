import { StyledMessage } from "./style"

import { Title3 } from "../../../globalStyles/Typography/Title3"

export const Message = ({message}) => {
    
    return(
        <StyledMessage message={message}>
            <div>
                <img src="">
                </img>
                <Title3>{message}</Title3>
            </div>
            <div></div>
        </StyledMessage>
    )
}