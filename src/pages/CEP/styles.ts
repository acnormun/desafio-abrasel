import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: 1rem;
    gap: 1rem;
    font-size: .8rem
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme["white"]};
  font-size: 1rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-100"]};
  font-weight: bold;
  font-size: .8rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const InputData = styled(BaseInput)`
  width: 5rem;
`;

export const SelectInput = styled.select`
  width: 4rem;
  height: 2rem;
  border-radius: .3rem;
  color: black;
  font-size: 1rem;
  font-weight: bold;

`
export const TableData = styled.div`
    display: flex;
    overflow: hidden;
    scroll-behavior: auto;

`

