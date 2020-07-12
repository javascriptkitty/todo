import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "../Checkbox";
import { Button } from "../AddTodo";
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  align-items: center;
  border-bottom: 2px solid #4e6096;
`;

const TomatoButton = styled(Button)`
  color: crimson;

  border-radius: 50%;
  width: 30px;
  padding: 0;
  height: 30px;
  display: flex;
  border: none;
  background: transparent;
  justify-content: center;
  align-items: center;

  &:hover {
    outline: none;
  }
`;

export default class Item extends Component {
  handleChange = (event) => {
    this.props.onChecked(event.target.value == "on");
  };
  onDelete = () => {
    this.props.onDelete();
  };
  render() {
    const { name, checked } = this.props.item;

    return (
      <Div>
        <label>
          <Checkbox checked={checked} onChange={this.handleChange} />
        </label>
        <p>{name}</p>
        <TomatoButton onClick={this.onDelete}>x</TomatoButton>
      </Div>
    );
  }
}
