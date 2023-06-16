import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
	--color-primary: #FF577F;
	--color-primary-focus: #FF427F;
	--color-primary-negative: #59323F;
	--color-grey-4: #121214;
	--color-grey-3: #212529;
	--color-grey-2: #343B41;
	--color-grey-1: #868E96;
	--color-grey-0: #F8F9FA;
	--color-success: #3FE864;
	--color-negative: #E83F5B;
	font-size: 62.5%;
}

a {
    color: var(--color-grey-0);
    text-decoration: none;
	justify-content: center;
    min-width: 100%;
    min-height: 100%;
    display: flex;
}

body {
	background-color: var(--color-grey-4);
	color: var(--color-grey-0);
	margin-top: 5.7rem;
}

nav, main, header {
	width: clamp(8rem, 100%, 37rem);
	margin: auto;
	padding: 0 1.2rem
}
`

export const alignJustifyCenter = css`
	display: flex;
	align-items: center;
	justify-content: center;
`
export const positionTopRight = css`
	position: absolute;
	right: 5vw;
    top: 6vh;
`