import { useEffect, useState } from "react";
import { TaskList } from "./TaskList";
import { statusMap } from "../consts/taskConsts";
import axios from "axios";
import { Button } from "./UI/Button";
import { TaskForm } from "./TaskForm";

function getRightTaskFormat(task) {
  const newTask = {
    id: task.id,
    team: task.userId,
    title: task.title,
    status: task.completed ? "Completed" : "ToDo",
  };
  return newTask;
}

export const TaskDesk = (props) => {
  const { className } = props;
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = async () => {
    setIsLoading(true);
    const { data } = await axios
      .get("https://jsonplaceholder.typicode.com/todos?userId=2")
      .then((res) => res)
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));

    const result = data.map(getRightTaskFormat);
    setTasks(result);
    return result;
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "row", gap: "15px" }}
    >
      <div>
        <p>Add new task</p>
        <TaskForm setTasks={setTasks} />
      </div>
      {isLoading ? (
        <p>LOADING...</p>
      ) : (
        <>
          {Object.values(statusMap).map((status) => (
            <TaskList
              tasks={tasks}
              setTasks={setTasks}
              stage={status}
              key={status}
            />
          ))}
        </>
      )}
    </div>
  );
};
