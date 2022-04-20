import "./styles.css";
import "antd/dist/antd.css";
import TaskDetails from "./components/TaskDetails";
import TaskLayout from "./components/TaskLayout";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskLayout />} />
        <Route path="/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}
