import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "../Checkbox";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  align-items: center;
  border-bottom: 2px solid palevioletred;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const deleteIcon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export default class Item extends Component {
  handleCheckboxChange = (event) => {
    this.props.onItemChecked(event.target.value);
  };
  render() {
    const { checked, name } = this.props.item;
    console.log(checked);
    return (
      <Div>
        <label>
          <Checkbox checked={checked} onChange={this.handleCheckboxChange} />
        </label>
        <p>{name}</p>
        <TomatoButton>Delete</TomatoButton>
      </Div>
    );
  }
}
