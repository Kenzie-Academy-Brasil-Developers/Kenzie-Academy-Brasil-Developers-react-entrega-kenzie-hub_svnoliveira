import { styled } from "styled-components"

export const StyledForm = styled.form`
    min-height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--color-grey-3);
    margin-top: 3.6rem;
    padding: 4.4rem 2.2rem 0 2.2rem;
    border-radius: 0.4rem;
    gap: 2rem;

    h1 {
        align-self: center;
    }

    span {
        color: var(--color-grey-1);
        align-self: center;
    }
`