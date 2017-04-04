import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO List App';
  tasks: Array<Object> = [];
  buttonLabel = 'Add Task';

  addTask(taskInput: string) {
    this.tasks.push({
      label: taskInput,
      isComplete: false
    });
    console.log(this.tasks);
  }

  completeTask(index: number) {
    console.log('completing', this.tasks[index]);
    const taskToComplete: any = this.tasks[index];
    taskToComplete.isComplete = !taskToComplete.isComplete;
  }

  deleteTask(index: number) {
    console.log(index);
    this.tasks.splice(index, 1);
  }
}
