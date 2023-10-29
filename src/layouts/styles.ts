import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3rem;

  background: ${(props) => props.theme["green-700"]};

  display: flex;
  flex-direction: column;
`;

export const LayoutBorder = styled.div`
  padding: 2rem;
  border: 2px solid white;
  width: auto;
  min-height: 100vh;
  border-radius: 20px;

  @media only screen and (max-width: 600px) {
    padding: 0;
    border: none;
    width: 100%;
    margin: 0
  }
`;
