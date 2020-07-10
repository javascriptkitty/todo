import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

import AddTodo from "../src/Components/AddTodo";
import Todos from "../src/Components/Todos";
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
      <Container className="App">
        <Title>Amazing TODO list</Title>
        <AddTodo onAdd={(text) => console.log(text)} />
        <Todos
          todos={[{ name: "do dishes", checked: false }]}
          onItemChecked={(el) => console.log(el)}
          onItemClick={(el) => console.log(el)}
        />
      </Container>
    );
  }
}
