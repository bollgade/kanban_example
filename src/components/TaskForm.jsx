import { useState } from "react";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const TaskForm = (props) => {
  console.log("RENDERING - ", "TaskForm", "\n================================");
  const { className, onCancel, setTasks } = props;
  const [taskForm, setTaskForm] = useState({
    title: "",
  });

  function onTitleChange(title) {
    setTaskForm((prev) => ({ ...prev, title }));
  }

  const OnSaveTask = () => {
    setTasks((prev) => [
      ...prev,
      { ...taskForm, id: new Date(), status: "ToDo" },
    ]);
  };

  return (
    <div
      className={className}
      style={{
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <Input
        value={taskForm.title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <Button onClick={OnSaveTask}>Save Task</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
};
