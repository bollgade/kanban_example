import { TaskForm } from "./TaskForm";
import { TaskAllLists } from "./TaskAllLists";
import { useState } from "react";

export const TaskDesk = (props) => {
  console.log("RENDERING - ", "TaskDesk", "\n================================");
  const { className } = props;
  const [setTasksFn, setSetTasksFn] = useState(() => {});

  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "row", gap: "15px" }}
    >
      <div>
        <p>Add new task</p>
        <TaskForm setTasks={setTasksFn} />
      </div>
      <TaskAllLists setSetTaskFn={setSetTasksFn} />
    </div>
  );
};
