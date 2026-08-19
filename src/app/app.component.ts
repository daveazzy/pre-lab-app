import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

import { dummyTasks } from './dummy-tasks'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string

  tasks = dummyTasks

  get selectedUser() {
    return this.users.find((users) => users.id === this.selectedUserId)!
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
