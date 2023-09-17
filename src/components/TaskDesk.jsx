import { useState } from "react";
import { TaskList } from "./TaskList";
import { statusMap } from "../consts/taskConsts";

export const TaskDesk = (props) => {
  const { className } = props;
  const [tasks, setTasks] = useState([]);

  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "row", gap: "15px" }}
    >
      {Object.values(statusMap).map((status) => (
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          stage={status}
          key={status}
        />
      ))}
    </div>
  );
};
