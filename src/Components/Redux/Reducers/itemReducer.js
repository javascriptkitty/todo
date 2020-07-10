const itemReducer = (state = [], action) => {
  const { index, name } = action;
  const newState = [...state];
  switch (action.type) {
    case "update":
      newState[index].name = name;
      return newState;
    case "add":
      return newState.push({ index, name });
    case "delete":
      return newState.splice(index, 1);
    default:
      return state;
  }
};
export default itemReducer;
