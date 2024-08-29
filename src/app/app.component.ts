import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

// import {NgFor, NgIf} for '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // We need to import the NgFor and NgIf here to unlock them, because they are a directive
  // The modern @for syntax does NOT need to be unlocked. It's NOT a structural directive,
  // but instead a template feature into Angular.
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
