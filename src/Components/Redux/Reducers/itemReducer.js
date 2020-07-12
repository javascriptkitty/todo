const itemReducer = (state = [], action) => {
  const newState = [...state];
  if (action == null) {
    return state;
  }
  switch (action.type) {
    case "update":
      newState[action.index].checked = action.checked;
      return newState;
    case "add":
      newState.push({ index: state.length, name: action.name });
      return newState;
    case "delete":
      newState.splice(action.index, 1);
      return newState;
    default:
      return state;
  }
};
export default itemReducer;
