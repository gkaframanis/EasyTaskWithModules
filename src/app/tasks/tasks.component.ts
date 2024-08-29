import { Component, Input, input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input() name?: string;
  isAddingTask = false;

  // Dependency injection and we can use the same instance to other components.
  // Shortcut provided by Typescript, so we don't have to declare beforehand the value.
  constructor(private tasksService: TasksService) {}

  // name = input<string>();

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
