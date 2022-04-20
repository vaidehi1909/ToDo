import React, { useState, useEffect, useContext } from "react";
import TaskContext from "./taskContext";
const TaskSummary = () => {
  const { tasks } = useContext(TaskContext);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [pendingTasksCount, setPendingTasksCount] = useState(0);

  useEffect(() => {
    setCompletedTasksCount(tasks.filter((t) => t.completed).length);
    setPendingTasksCount(tasks.filter((t) => !t.completed).length);
  }, [tasks]);

  return (
    <>
      <p>{completedTasksCount} Tasks are completed</p>
      <p>{pendingTasksCount} Tasks are pending</p>
    </>
  );
};

export default TaskSummary;
