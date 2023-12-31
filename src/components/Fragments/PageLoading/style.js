import { keyframes, styled } from "styled-components"
import { alignJustifyCenter } from "../../../globalStyles/GlobalStyles"

const ldsRiple = keyframes`
    0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

export const StyledLoading = styled.div`

  ${alignJustifyCenter}
  background-color: var(--color-grey-3);
  border-radius: 0.4rem;
  height: 80vh;
  width: 80vw;
  margin: auto;

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid var(--color-primary);
  opacity: 1;
  border-radius: 50%;
  animation: ${ldsRiple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
`
