import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useSelector } from "react-redux";

const selector = (state) => state.todo;

// https://jsonplaceholder.typicode.com/users/7
const TaskDetails = () => {
  const tasks = useSelector(selector);
  const [data, setData] = useState({});
  const param = useParams();
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/");
  };

  useEffect(() => {
    setData(tasks.find((task) => String(task.id) === param.id));
  }, [param.id, tasks]);

  return (
    <>
      {data.title}
      <br />
      <Button onClick={onBack}> Back </Button>
    </>
  );
};

export default TaskDetails;
