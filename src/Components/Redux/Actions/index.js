// action creators

export const updateAction = (index, checked) => {
  return {
    type: "update",
    index,
    checked,
  };
};

export const addAction = (text) => {
  return {
    type: "add",

    name: text,
    checked: false,
  };
};
export const deleteAction = (index) => {
  return {
    type: "delete",
    index,
  };
};
