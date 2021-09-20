  // // A simple redux store/actions/reducer implementation.
  // // A true app would be more complex and separated into different files.
  // import { createStore } from "redux";
  // import { TaskInterface } from "../interfaces/task.interface";

  // // The actions are the "names" of the changes that can happen to the store
  // export const actions = {
  //   ARCHIVE_TASK: "ARCHIVE_TASK",
  //   PIN_TASK: "PIN_TASK",
  // };

  // // The action creators bundle actions with the data required to execute them
  // export const archiveTask = (id: string) => ({ type: actions.ARCHIVE_TASK, id });
  // export const pinTask = (id: string) => ({ type: actions.PIN_TASK, id });

  // // All our reducers simply change the state of a single task.
  // function taskStateReducer(taskState: string) {
  //   return (state: any, action: TaskInterface) => {
  //     return {
  //       ...state,
  //       tasks: state.tasks.map((task: TaskInterface) =>
  //         task.id === action.id ? { ...task, state: taskState } : task
  //       ),
  //     };
  //   };
  // }

  // // The reducer describes how the contents of the store change for each action
  // export const reducer = (state: any, action: any) => {
  //   switch (action.type) {
  //     case actions.ARCHIVE_TASK:
  //       return taskStateReducer("TASK_ARCHIVED")(state, action);
  //     case actions.PIN_TASK:
  //       return taskStateReducer("TASK_PINNED")(state, action);
  //     default:
  //       return state;
  //   }
  // };

  // // The initial state of our store when the app loads.
  // // Usually you would fetch this from a server
  // const defaultTasks = [
  //   { id: "1", title: "Something", state: "TASK_INBOX" },
  //   { id: "2", title: "Something more", state: "TASK_INBOX" },
  //   { id: "3", title: "Something else", state: "TASK_INBOX" },
  //   { id: "4", title: "Something again", state: "TASK_INBOX" },
  // ];

  // // We export the constructed redux store
  // export default createStore(reducer, { tasks: defaultTasks });
  import { configureStore, createSlice } from "@reduxjs/toolkit";

  const defaultTasks = [
    { id: "1", title: "Something", state: "TASK_INBOX" },
    { id: "2", title: "Something more", state: "TASK_INBOX" },
    { id: "3", title: "Something else", state: "TASK_INBOX" },
    { id: "4", title: "Something again", state: "TASK_INBOX" },
  ];

  const taskReducer = createSlice({
    name: "tasks",
    initialState: defaultTasks,
    reducers: {
      pinTask: (state, action) => {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              state: "TASK_PINNED",
            };
          } else {
            return item;
          }
        });
      },
      unPinTask: (state, action) => {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              state: "TASK_INBOX",
            };
          } else {
            return item;
          }
        });
      },
      archive: (state, action) => {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              state: "TASK_ARCHIVED",
            };
          } else {
            return item;
          }
        });
      },
      addTask: (state, action) => {
        let id = "0";
        if (state.length !== undefined && state.length !== null) {
          id = (state.length + 1).toString();
        }
        return [
          ...state,
          { id: id, title: action.payload.title, state: "TASK_INBOX" },
        ];
      },
    },
  });

  const store = configureStore({
    reducer: taskReducer.reducer,
  });

  export const { pinTask, unPinTask, archive, addTask } = taskReducer.actions;

  export { taskReducer, store };