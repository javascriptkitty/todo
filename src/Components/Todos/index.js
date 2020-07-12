import React, { Component } from "react";
import Item from "../Item";
import Card, { CardTitle, CardContent } from "../Card";
import { connect } from "react-redux";
import { updateAction, deleteAction } from "../Redux/Actions";

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch) => ({
  updateAction: (index, value) => dispatch(updateAction(index, value)),
  deleteAction: (index) => dispatch(deleteAction(index)),
});
class Todos extends Component {
  render() {
    const { todos } = this.props;

    const updateTodo = (index, value) => {
      this.props.updateAction(index, value);
    };
    const deleteTodo = (index) => {
      this.props.deleteAction(index);
    };
    return (
      <Card>
        <CardTitle>
          you have {todos.length} {todos.length == 1 ? "todo" : "todos"}
        </CardTitle>
        <CardContent>
          {todos.map((item, index) => {
            return (
              <Item
                key={index}
                item={item}
                onChecked={updateTodo.bind(this, index)}
                onDelete={deleteTodo.bind(this, index)}
              />
            );
          })}
        </CardContent>
      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
