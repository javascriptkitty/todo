// action creators

export const updateAction = (index, checked, name) => {
  return {
    type: "update",
    index,
    checked,
    name,
  };
};

export const addAction = (index, checked, name) => {
  return {
    type: "add",
    index,
    name,
    checked,
  };
};
export const deleteAction = (index) => {
  return {
    type: "delete",
    index,
  };
};
