import { styled } from "styled-components"

export const StyledInputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    transition: 0.4s;

    input{
        margin-bottom: 2rem;
        padding: 1.2rem 1.6rem;
        font: 400 1.6rem "Inter", sans-serif;
        color: var(--color-grey-0);
        background-color: var(--color-grey-2);
        border: 0.2rem solid var(--color-grey-2);
        border-radius: 0.4rem;
        outline: none;
    }
    
    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
    
    input::placeholder {
        color: var(--color-grey-1);
    }

    input:focus {
        border-color: var(--color-grey-0);
    }

    label {
        font: 400 1.2rem "Inter", sans-serif;
        padding-bottom: 1.6rem;
    }

    p {
        position: absolute;
        bottom: 3%;
        left: 0;
        color: var(--color-negative);
        z-index: 5;
        font: 400 1.05rem/1.05rem "Inter", sans-serif;
    }
`