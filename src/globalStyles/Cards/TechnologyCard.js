import { styled } from "styled-components";

export const TechnologyCard = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--color-grey-4);
    border-radius: 0.4rem;
    padding: 1.3rem 2.2rem;
    cursor: pointer;
    transition: 0.4s;

    > span {
        color: var(--color-grey-1);
    }

    &:hover{
        background-color: var(--color-grey-2);
    }

    :hover span {
        color: var(--color-grey-0);
    }
`