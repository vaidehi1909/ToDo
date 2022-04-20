const reducer = (state = [], action) => {
  switch (action.type) {
    case "setTasks":
      return action.payload;
    case "addTask":
      return [...state, action.payload];
    case "deleteTask":
      return state.filter((task) => task.id !== action.payload);
    case "updateTask":
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, ...action.payload.updatedTask };
        }
        return task;
      });
    default:
      return state;
  }
};
export default reducer;
/*
    state
    /   \
  user   todo
  /        [{1}, {2}, {3}]
 
  global_state = { todo: [], user: {} }
  JSON.stringify(global_state)
*/
