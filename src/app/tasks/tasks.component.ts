import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

export interface DummyTasks {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>()
  userId = input.required<string>()

  tasks = input.required<DummyTasks[]>()

  get selectedUserTasks () {
    return this.tasks().filter((task) => task.userId === this.userId())
  }
}
