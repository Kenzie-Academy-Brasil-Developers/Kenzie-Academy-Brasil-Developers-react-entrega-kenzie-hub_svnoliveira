import { styled } from "styled-components";

export const StyledDashboard = styled.div`
    #dashboard {
	width: 100vw;
    }

    > nav, main > div {
        width: clamp(8rem, 100%, 77.5rem);
    }

    > main, > header {
        width: 100%;
        border-top: solid 0.2rem var(--color-grey-3);
    }

    > header {
        margin-top: 5.7rem;
    }

    main > div {
        margin: auto;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-top: 3.7rem;
        gap: 2.5rem;
    }
`