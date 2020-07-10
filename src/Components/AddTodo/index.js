import React from "react";
import styled from "styled-components";
import Card from "../Card";
// Render a styled text input with the standard input color, and one with a custom input color

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: SEASHELL;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "SEASHELL")};
  color: ${(props) => (props.primary ? "SEASHELL" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const TomatoButton = styled(Button)`
  color: CRIMSON;
  border-color: CRIMSON;
`;

const AddTodo = () => {
  let input;
  return (
    <Card className="add">
      <Input />
      <TomatoButton>Add</TomatoButton>
    </Card>
  );
};
export default AddTodo;
