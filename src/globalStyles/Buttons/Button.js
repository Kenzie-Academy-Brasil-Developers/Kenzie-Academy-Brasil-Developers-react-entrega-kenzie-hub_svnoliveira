import { css, styled } from "styled-components";

export const Button = styled.button`
    padding: 1.6rem;
    border-radius: 0.4rem;
    color: var(--color-grey-0);
    transition: 0.2s;
    font: 500 1.6rem "Inter", sans-serif;

    ${({color}) => {
        switch (color) {
            case "primary":
                return css`
                background-color: var(--color-primary);
                &:hover{
                    background-color: var(--color-primary-focus);
                }
                `
            case "grey":
                return css`
                background-color: var(--color-grey-1);
                
                &:hover{
                    background-color: var(--color-grey-2);
                }
                `
            case "black":
                return css`
                background-color: var(--color-grey-3);
                font-weight: 600;
                font-size: 1.2rem;
                padding: 1rem;

                &:hover{
                    background-color: var(--color-grey-2);
                }
                `
            case "disabled":
                return css`
                background-color: var(--color-primary-negative);

                cursor: default;
                `
        }
    }}
`