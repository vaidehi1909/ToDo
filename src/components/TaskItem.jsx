import React, { useState, useContext } from "react";
import TaskContext from "./taskContext";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Typography } from "antd";
const { Text } = Typography;
// https://reactrouter.com/docs/en/v6/api#usenavigate

const TaskItem = (props) => {
  const [isComplete, setIsComplete] = useState(props.task.completed);
  const { action } = useContext(TaskContext);
  const navigate = useNavigate();

  const onTaskTitleClick = () => {
    navigate(`/${props.taskId}`);
  };

  const onChecked = (e) => {
    action.updateTask({
      id: props.taskId,
      updatedTask: { completed: e.target.checked }
    });
    setIsComplete(e.target.checked);
  };

  const deleteAction = () => {
    action.deleteTask(props.taskId);
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <Checkbox onChange={onChecked} checked={isComplete} /> &nbsp;
      <Text onClick={onTaskTitleClick} delete={isComplete}>
        {props.task.title}
      </Text>{" "}
      &nbsp;
      <Button type="primary" danger shape="circle" onClick={deleteAction}>
        {" "}
      </Button>
    </div>
  );
};

export default TaskItem;
