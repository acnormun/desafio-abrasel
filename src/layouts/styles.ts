import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2.5rem;

    background: ${(props) => props.theme['gray-600']};

    display: flex;
    flex-direction: column;
`