import { Button } from "./UI/Button";

export const TaskItem = (props) => {
  const { className, task, onStageChange, onDelete } = props;

  const onDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <div
      className={className}
      draggable
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "150px",
      }}
      onDragStart={onDragStart}
    >
      <p>{task.title}</p>
      <p>{task.team}</p>
      <p>{task.dueDate}</p>
      {task.status !== "Completed" && (
        <Button onClick={() => onStageChange(task)}>NextStage</Button>
      )}
      <Button onClick={() => onDelete(task.id)}>Delete</Button>
    </div>
  );
};
