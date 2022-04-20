import React, { useContext } from "react";
import TaskContext from "./taskContext";
import TaskItem from "./TaskItem";

const TaskListView = (props) => {
  //console.log(props);
  const { tasks } = useContext(TaskContext);
  console.log(tasks, 'tasks...')
  return (
    <div style={{ marginTop: "20px" }}>
      {(tasks || []).map((task, i) => {
        return <TaskItem task={task} key={task.id} taskId={task.id} />;
      })}
    </div>
  );
};
export default TaskListView;
