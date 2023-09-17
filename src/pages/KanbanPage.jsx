import { TaskDesk } from '../components/TaskDesk';

export const KanbanPage = (props) => {
  const { className } = props;

  return (
    <div 
      className = {className}
      style={{margin: '50px'}}
    >
      <TaskDesk/>
    </div>
  );
};