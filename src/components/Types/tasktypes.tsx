export interface TaskInterface {
    id: string;
    title: string;
    state?: string;
  }
  
  export interface TaskInterfaceProp {
    args: { task: { id: string; title: string; state: string; updatedAt: Date } };
    task: TaskInterface;
    onArchiveTask: boolean;
    onPinTask: boolean;
  }