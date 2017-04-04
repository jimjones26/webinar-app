import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  tasks: Array<Object> = [];

  constructor() {
    this.addTask('task 1');
    this.addTask('task 2');
    this.addTask('task 3');
  }

  getTasks() {
    return this.tasks;
  }

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
