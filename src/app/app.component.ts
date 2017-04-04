import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO List App';
  tasks: Array<string> = [];
  buttonLabel = 'Add Task';

  addTask(taskInput: string) {
    this.tasks.push(taskInput);
    console.log(this.tasks);
  }
}
