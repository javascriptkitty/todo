import React, { Component } from "react";
import styled from "styled-components";
import Item from "../Item";
import Card, { CardTitle, CardContent } from "../Card";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: SEASHELL;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default class Todos extends Component {
  render() {
    return (
      <Card>
        <CardTitle>todos</CardTitle>
        <CardContent>
          {this.props.todos.map((item, index) => {
            return (
              <Item
                key={index}
                item={item}
                onClick={this.props.onItemClick(index)}
                onChecked={this.props.onItemChecked}
              />
            );
          })}
        </CardContent>
      </Card>
    );
  }
}
