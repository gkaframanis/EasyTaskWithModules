// A service in Angular is just another class
import { NewTaskData } from './task/task.model';
import { Injectable } from '@angular/core';

// Register a class as injectable
@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    // This tasks when we retrieve it, it will be a string
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      // Convert the JSON string to array
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks = [
      ...this.tasks,
      { id: new Date().getTime().toString(), userId, ...taskData },
    ];
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    // Convert the array to JSON string.
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
