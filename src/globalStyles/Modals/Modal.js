import { styled } from "styled-components"
import { alignJustifyCenter } from "../../globalStyles/GlobalStyles"

export const ModalController = styled.div`
    ${alignJustifyCenter}
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.40);
    position: fixed;
    top: 0;
    left: 0;
    
    > h1 {
        align-self: center;
        justify-self: center;
    }

    > div {
        width: clamp(15rem, 100%, 37rem);
        height: 34.2rem;
        margin: 0.8rem;
        border-radius: 0.4rem;
        display: flex;
        flex-direction: column;
    }

    > div > .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-grey-2);
        border-radius: 4px 4px 0px 0px;
        padding: 1.2rem 0rem;
        padding-left: clamp(0rem, 2vw, 2.2rem);
        padding-right: clamp(0rem, 1.5vw, 2.2rem);
    }

    > div > .modal-header > button {
        font-size: 2rem;
        background-color: var(--color-grey-2);
        color: var(--color-grey-1);
        cursor: pointer;
    }

    > div > form {
        min-height: 0;
        margin: 0;
        gap: 0;
        padding: 1.8rem 0 3.2rem 0;
        padding-left: clamp(0rem, 2vw, 2.2rem);
        padding-right: clamp(0rem, 1.5vw, 2.2rem);
        border-radius: 0px 0px 4px 4px;
        background-color: var(--color-grey-3);
    }

    > div > form > :last-child {
        display: flex;
        justify-content: center;
        gap: 2.2rem
    }

    > div > form > :last-child {
        display: flex;
        gap: 2.2rem
    }

    > div > form > :last-child > :first-child{
        flex-grow: 1;
    }
`