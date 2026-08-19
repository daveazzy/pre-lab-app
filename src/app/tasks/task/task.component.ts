import { Component, input, output } from '@angular/core';
import { type DummyTasks } from '../task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<DummyTasks>()
  complete = output<string>()

  onCompleteTask() {
    this.complete.emit(this.task().id)
  }
}
