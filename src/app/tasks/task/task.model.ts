export interface NewTaskData {
  title: string;
  summary: string;
  dueDate: string;
}

export interface Task extends NewTaskData {
  id: string;
  userId: string;
}
