import { css, styled } from "styled-components";

export const StyledNavContainer = styled.div`
    display: flex;
    align-items: center;

    ${({position}) => {
        
        switch (position) {
            case "center":
                return css`
                justify-content: center;                
            `       
        default:
                return css`
                justify-content: space-between;                
            `
        }
    }}
`