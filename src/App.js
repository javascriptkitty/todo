import React, { Component } from "react";
import styled from "styled-components";

import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import "./App.css";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: DARKCYAN;
`;

// Create an Input component that'll render an <input> tag with some styles

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Amazing TODO list</Title>
        <AddTodo />
        <Todos />
      </div>
    );
  }
}
