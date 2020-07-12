import React from "react";
import Div from "../StyledComponents";
import Checkbox from "../StyledComponents/Checkbox";
import { TomatoButton } from "../StyledComponents/Buttons";

const Item = (props) => {
  const { name, checked } = props.item;
  const handleChange = () => {
    props.onChecked(!checked);
  };
  const onDelete = () => {
    props.onDelete();
  };

  return (
    <Div>
      <div className="flex">
        <label>
          <Checkbox checked={checked} onChange={handleChange} />
        </label>
        <p className={checked ? "todo-done" : null}>{name}</p>
      </div>
      <TomatoButton onClick={onDelete}>&#10060;</TomatoButton>
    </Div>
  );
};

export default Item;
