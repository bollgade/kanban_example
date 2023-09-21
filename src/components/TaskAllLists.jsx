import { useEffect, useState } from "react";
import { TaskList } from "./TaskList";
import { statusMap } from "../consts/taskConsts";
import axios from "axios";

function getRightTaskFormat(task) {
  const newTask = {
    id: task.id,
    team: task.userId,
    title: task.title,
    status: task.completed ? "Completed" : "ToDo",
  };
  return newTask;
}
const mouseoverCallback = () => {};

export const TaskAllLists = (props) => {
  console.log(
    "RENDERING - ",
    "TaskAllList ",
    "\n================================"
  );
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { setSetTaskFn } = props;

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
    setSetTaskFn(() => setTasks);
  }, [setSetTaskFn]);
  useEffect(() => {
    fetchTasks();
    document.addEventListener("mouseover", mouseoverCallback);
    return () => {
      document.removeEventListener("mouseover", mouseoverCallback);
    };
  }, []);
  return (
    <>
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
    </>
  );
};
