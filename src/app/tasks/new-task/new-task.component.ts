import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
// A collective of Directives and features that help you deal with forms and user inputs.
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  // The FormsModule import prevents the browser default, the automatic sent request with the data.
  // Also gives you the (ngSubmit) event that will be emitted, which we can listen to the form element,
  // which will occur when the form submission happens and the browser default is prevented.
  // Then we can run our own code in response to this ngSubmit event.
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  // No data are being emitted when using void
  @Output() close = new EventEmitter<void>();

  // We don't need @Input or @Output since we use this value inside this component's template.
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // TasksService is the injection token
  private tasksService = inject(TasksService);

  // In case we used signals for the two-way-binding
  // The template doesn't have to change at all if we work with signals.
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId,
    );
    this.close.emit();
  }
}
