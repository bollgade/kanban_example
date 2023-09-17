import { statusMap } from "../consts/taskConsts";
import { TaskItem } from "./TaskItem";

export const TaskList = (props) => {
  const { tasks, setTasks, stage, className } = props;

  const deleteTask = (removeId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== removeId));
  };

  const changeTaskStatus = (task) => {
    setTasks((prevTasks) =>
      prevTasks.map((oldTask) => {
        if (oldTask.id === task.id) {
          const newStatus = statusMap[stage];
          oldTask.status = newStatus;
        }
        return oldTask;
      })
    );
  };

  return (
    <div
      className={className}
      style={{
        border: "thick double gray",
        padding: "5px",
        width: "180px",
      }}
    >
      <h3>{stage}</h3>
      {tasks
        .filter((task) => task.status === stage)
        .map((task) => (
          <TaskItem
            key={task.id}
            onDelete={deleteTask}
            onStageChange={changeTaskStatus}
            task={task}
          />
        ))}
    </div>
  );
};
