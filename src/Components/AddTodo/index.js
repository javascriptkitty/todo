import React from "react";
import { Input } from "../StyledComponents";
import Button from "../StyledComponents/Buttons";
import Card from "../StyledComponents/Card";
import { addAction } from "../Redux/Actions";
import { connect } from "react-redux";

// Render a styled text input with the standard input color, and one with a custom input color

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
      <div className="flex space-between">
        <Input onChange={onInputChange} />
        <Button onClick={addTodo}>add</Button>
      </div>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addAction: (text) => dispatch(addAction(text)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
