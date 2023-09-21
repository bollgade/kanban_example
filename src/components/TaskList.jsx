import { statusMap } from "../consts/taskConsts";
import { TaskItem } from "./TaskItem";

export const TaskList = (props) => {
  console.log(
    "RENDERING - ",
    "TaskList ",
    "\n================================"
  );
  const { tasks, setTasks, stage, className } = props;

  const deleteTask = (removeId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== removeId));
  };

  const changeTaskStatus = (task, status) => {
    setTasks((prevTasks) =>
      prevTasks.map((oldTask) => {
        if (oldTask.id === task.id) {
          const newStatus = status || statusMap[stage];
          oldTask.status = newStatus;
        }
        return oldTask;
      })
    );
  };

  const onDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    changeTaskStatus({ id: +taskId }, stage);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={className}
      style={{
        border: "thick double gray",
        padding: "5px",
        width: "180px",
      }}
      onDrop={onDrop}
      onDragOver={onDragOver}
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
