import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 1rem;
  gap: 1rem;
  font-size: 1rem;
  
`;

export const HeaderTitle = styled.p`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export const HeaderSubtitle = styled.p`
  display: flex;
  font-size: 1rem;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: .7rem;
  }
`;
