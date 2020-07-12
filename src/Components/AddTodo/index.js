import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card";
import { addAction } from "../Redux/Actions";
import { connect } from "react-redux";

// Render a styled text input with the standard input color, and one with a custom input color

const Input = styled.input`
  padding: 0.5em;
  margin: 1em;
  color: ${(props) => props.inputColor || "#4e6096"};
  background: transparent;
  border: none;
  border-bottom: 2px solid #4e6096;
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  //box-shadow: 0px 0px 0px 2px #9fb4f2;
    background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
    background-color: #7892c2;
    border-radius: 10px;
    border: 1px solid #4e6096;

    display: inline-block;
    cursor: pointer;
    color: SEASHELL;
    font-family: Arial;
    font-size: 16px;
    padding: 5px 20px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #283966;
  }
  &:hover {
    background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
    background-color: #476e9e;
  }
  &:active {
    position: relative;
    outline:none;
    top: 1px;
  }
  }
`;

const AddTodo = ({ addAction }) => {
  let data;

  const onInputChange = (event) => {
    data = event.target.value;
  };
  const addTodo = () => {
    if (data) {
      addAction(data);
    }
  };
  // WORKS ONLY FOR CLASS COMPONENTS
  // const { dispatch } = this.props;
  // const addTodo = () => {
  //   if (data) {
  //     dispatch(addAction(data));
  //   }
  // };

  return (
    <Card>
      <Input onChange={onInputChange} />
      <Button onClick={addTodo}>Add</Button>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addAction: (text) => dispatch(addAction(text)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
