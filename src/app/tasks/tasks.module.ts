import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/card/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export { NgModule } from '@angular/core';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  // The CommonModule includes the DatePipe. The BrowserRouter can only be used in the root module.
  imports: [CommonModule, SharedModule, FormsModule],
})
export class TasksModule {}
