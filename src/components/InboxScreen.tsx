import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pinTask, unPinTask, archive } from "../Redux/redux";
import { TaskInterface } from "./Types/tasktypes";
import AddTask from "./Add_Task";
import {PureTaskList} from './TaskList';

export const   PureInboxScreen = ()=> {
  const task = useSelector((state) => state);
  const dispatch = useDispatch();
  

  const onPinTask = (id: string) => {
    dispatch(pinTask({ id: id }));
  };
  const onArchiveTask = (id: string) => {
    dispatch(archive({ id: id }));
  };
  const onUnPinTask = (id: string) => {
    dispatch(unPinTask({ id: id }));
  };
  return (
    <div>
      <AddTask />
      <PureTaskList
        tasks={task as TaskInterface[]}
        onPinTask={onPinTask}
        onArchiveTask={onArchiveTask}
        onUnPinTask={onUnPinTask}
      />
    </div>
  );
};

