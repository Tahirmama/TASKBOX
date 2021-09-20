import React from 'react';
import Task from './Task';
import { TaskInterface } from './Types/tasktypes';



export interface TasksList {
  loading?: boolean;
  tasks: TaskInterface[];
  onPinTask?: (id: string) => void;
  onArchiveTask?: (id: string) => void;
  onUnPinTask?: (id: string) => void;
}
export const PureTaskList: React.FC<TasksList> = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
  onUnPinTask,
})=> {
  const events = {
    onPinTask,
    onArchiveTask,
    onUnPinTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];
  return (
    <div className="max-w-xl mx-auto bg-gray-200 p-4 my-6 rounded-md ">
       {!!tasksInOrder &&
        tasksInOrder.map((task) => (
          <Task key={task.id} task={task} {...events} />
        ))}
    </div>
  );
}

