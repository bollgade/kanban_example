import { Button } from "./UI/Button";

export const TaskItem = (props) => {
  const { className, task, onStageChange, onDelete } = props;

  return (
    <div
      className={className}
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "150px",
      }}
    >
      <p>{task.title}</p>
      <p>{task.team}</p>
      <p>{task.dueDate}</p>
      <Button onClick={() => onStageChange(task)}>NextStage</Button>
      <Button onClick={() => onDelete(task.id)}>Delete</Button>
    </div>
  );
};
