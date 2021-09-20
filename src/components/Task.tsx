import React,{useState} from 'react';
import { TaskInterface } from './Types/tasktypes';


interface Taskprops {
  task: TaskInterface;
  onArchiveTask?: (id: string) => void;
  onPinTask?: (id: string) => void;
  onUnPinTask?: (id: string) => void;
}

const Task: React.FC<Taskprops> =
({ task: { id, title, state }
  , onArchiveTask
  , onPinTask 
, onUnPinTask
}) =>{
  const [isChecked, setIsChecked] = useState<boolean>();
  return (
<div>
<div className="title">
  <input
    type="text"
    value={title}
    readOnly={true}
    placeholder="Input title"
  
 
  />
</div>
    <div
    className={`list-item ${state} py-2 my-1 px-2 flex justify-between relative rounded ${
      state === "TASK_ARCHIVED" ? "bg-gray-100" : "bg-white"
    }`}
  >
    {state === "TASK_ARCHIVED" && (
      <div
        className="absolute w-full  -ml-2 mt-3  bg-gray-400"
        style={{ height: "3px" }}
      ></div>
    )}
    <div>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_PINNED"}
          disabled={state === "TASK_ARCHIVED" ? true : false}
          name="checked"
          className="cursor-pointer"
          onClick={(e) => {
            state !== "TASK_ARCHIVED" && !isChecked
              ? !!onPinTask && onPinTask(id)
              : !!onUnPinTask && onUnPinTask(id);
            setIsChecked(!isChecked);
          }}
        />
      </label>
      <div className="title inline">
        <h1 className="inline px-3">{title}</h1>
      </div>
    </div>

    {/* <div
      className="actions"
      onClick={(event) => event.stopPropagation()}
    ></div> */}
    {state !== "TASK_ARCHIVED" ? (
      <span
        className="text-blue-400 hover:text-blue-500 cursor-pointer relative mr-0 right-0 "
        onClick={() =>
          state !== "TASK_ARCHIVED" && !!onArchiveTask && onArchiveTask(id)
        }
      >
        archive
      </span>
    ) : (
      "archived"
    )}
    {/* {state !== "TASK_ARCHIVED" && (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a onClick={() => !!onPinTask && onPinTask(id)}>
        <span>pin</span>
      </a>
    )} */}
  </div>
  </div>
);
};
export default Task;