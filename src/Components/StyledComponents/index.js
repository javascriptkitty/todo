import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  align-items: center;
  &:not(:first-child) {
    border-top: 1px solid #4e6096;
  }
`;
export default Div;

export const Input = styled.input`
  padding: 0.5em;
  margin: 1em;
  color: ${(props) => props.inputColor || "#4e6096"};
  background: transparent;
  border: none;
  width: 100%;
  border-bottom: 2px solid #4e6096;
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  font-family: "Architects Daughter", cursive;
  color: DARKCYAN;
`;
