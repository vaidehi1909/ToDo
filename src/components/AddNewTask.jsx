import React, { useContext, useState } from "react";
import { Input, Button, Row, Col, message } from "antd";
import TaskContext from "./taskContext";

function* idFactory() {
  let id = 0;
  while (true) yield ++id;
}

const ids = idFactory();

const AddNewTask = () => {
  const { action } = useContext(TaskContext);
  const [newTaskValue, setNewTaskValue] = useState("");
  const onChange = (e) => {
    setNewTaskValue(e.target.value);
  };

  const onAddTask = () => {
    if (newTaskValue !== "") {
      action.addTask({
        title: newTaskValue,

        completed: false,

        id: ids.next().value
      });
      setNewTaskValue("");
    } else {
      message.error("Please Enter Task!!");
    }
  };

  return (
    <>
      <Row justify="space-between">
        <Col span={16}>
          <Input
            placeholder="Write Your Task"
            onChange={onChange}
            value={newTaskValue}
          />{" "}
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={onAddTask}>
            Add Task
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default AddNewTask;
