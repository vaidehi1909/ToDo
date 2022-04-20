import React, { useEffect } from "react";
import AppTitle from "./Title.jsx";
import AddNewTask from "./AddNewTask.jsx";
import TaskListView from "./TaskListView";
import TaskSummary from "./TaskSummary";
import TaskContext from "./taskContext";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

// https://jasonwatmore.com/post/2020/03/02/react-hooks-redux-user-registration-and-login-tutorial-example
// const selectr = (state) => { return new_value}
// const value = useSelector(selectr)
const selector = (state) => {
  //console.log(state, "123...");
  return state.todo;
};

// https://codesandbox.io/s/4jxw7n1r5x?file=/src/index.js:319-330

//https://github.com/reduxjs/reselect
//https://react-redux.js.org/api/hooks

const TaskLayout = () => {
  //const [tasks, dispatch] = useReducer(reducer, []);

  const tasks = useSelector(selector);
  const dispatch = useDispatch();
  // const [users, dispatch_1] = useReducer(() => {}, []);
  // const [tasks, setTasks] = useState([]);
  // const {data, loading, error} = useFetch('http://');
  // https://reactjs.org/docs/hooks-reference.html

  useEffect(() => {
    // https://www.valentinog.com/blog/await-react/
    // https://dev.to/m0nm/usestate-vs-usereducer-what-are-they-and-when-to-use-them-2c5c
    // const getResult = async () => {
    //   const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    //   console.log(res);
    // };
    //closure in js
    //https://reactjs.org/docs/higher-order-components.html
    // https://dev.to/gethackteam/from-higher-order-components-hoc-to-react-hooks-2bm9
    // https://www.aleksandrhovhannisyan.com/blog/higher-order-components/
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => {
    //     const data = res.data;
    //     // console.log(data);
    //     dispatch({ type: "setTasks", payload: data });
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  // componentDidMount

  const action = {
    deleteTask: (taskId) => dispatch({ type: "deleteTask", payload: taskId }),
    addTask: (newTask) => dispatch({ type: "addTask", payload: newTask }),
    updateTask: (updatedTask) =>
      dispatch({ type: "updateTask", payload: updatedTask })
  };

  // const getUserAction = () => {
  //  api call for user permission
  //  user_permission = { has_delete_action: true, has_update_action: false }
  //  const action = {}
  //  if(user_permission.has_delete_action) {
  //    action['deleteTask'] = (taskId) => dispatch({ type: "deleteTask", payload: taskId })
  //  }
  //  if(user_permission.has_update_action) {
  //    action['updateTask'] = (updatedTask) => dispatch({ type: "updateTask", payload: updatedTask })
  //  }
  //   return action;
  // };

  return (
    <div style={{ marginLeft: "50px", marginRight: "50px" }}>
      <TaskContext.Provider value={{ tasks, action }}>
        <AppTitle />
        <AddNewTask />
        <TaskSummary />
        <TaskListView />
      </TaskContext.Provider>
    </div>
  );
};

export default TaskLayout;
