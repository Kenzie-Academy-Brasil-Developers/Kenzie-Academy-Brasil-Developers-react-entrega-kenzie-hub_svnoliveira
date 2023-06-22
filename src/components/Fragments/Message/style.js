import { css, keyframes, styled } from "styled-components"
import { positionTopRight } from "../../../globalStyles/GlobalStyles"
import success from "../../../assets/success.svg"
import negative from "../../../assets/negative.svg"

export const fadeRight = keyframes`
    0% {
		opacity: 0;
		transform: translateX(50px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`
export const timerBarDown = keyframes`
    0% {
		transform: scaleX(1);
		transform-origin: 0% 0%;
	}

	100% {
		transform: scaleX(0.2);
		transform-origin: 0% 0%;
	}
`

export const StyledMessage = styled.div`
    ${positionTopRight}
    height: 7rem;
    width: clamp(25rem, 20vw, 28.5rem);
    border-radius: 0.4rem;
    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
    animation: ${fadeRight} 1s ease-in 0s 1 normal forwards;

    div > img {
        width: 3rem;
        height: 3rem;
        margin: 0 1.2rem 0 1rem;
    }

    > :nth-child(1){
        height: 90%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    > :nth-child(2){
        height: 10%;
        min-width: 100%;
        border-radius: 0 0 0.4rem 0.4rem;
        animation: ${timerBarDown} 4s ease-out 1s 1 normal forwards;
    }

    ${({message}) => {
        if(message === "Conta criada com sucesso!"  || 
        message === "Login feito com sucesso"       ||
        message === "Tecnologia cadastrada"         ||
        message === "Status modificado"             ||
        message === "Excluído com sucesso"){
            return css`

            img {
                content: url(${success});
            }

            > :nth-child(2){
                background-color: var(--color-success);
            }
            `
        } else {
            return css`

            img {
                content: url(${negative});
            }

            > :nth-child(2){
                background-color: var(--color-negative);
            }
            `
        }
    }}
`
