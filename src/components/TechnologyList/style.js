import { styled } from "styled-components";

export const StyledTechSection = styled.section`
    width: clamp(8rem, 100%, 77.5rem);
    margin: auto;
    
    > header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        width: 100%;
    }
    
    > header > button {
        font-size: 2.5rem;
        line-height: 2.5rem;
        padding: 0.5rem 1rem;
    }
    
    > ul {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        min-height: 47rem;
        padding: 2.3rem;
        margin-top: 2rem;
        border-radius: 0.4rem;
        background-color: var(--color-grey-3);
        overflow-y: auto;
    }
`