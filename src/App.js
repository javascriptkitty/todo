import React, { Component } from "react";
import { Title } from "./Components/StyledComponents";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import "./App.css";

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
