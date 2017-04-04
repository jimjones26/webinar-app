import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {

  tasksToDisplay: Array<Object>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.tasksToDisplay = this.todoService.getTasks();
  }

  completeTask(index) {
    this.todoService.completeTask(index);
    this.tasksToDisplay = this.todoService.getTasks();
  }

  deleteTask(index) {
    this.todoService.deleteTask(index);
    this.tasksToDisplay = this.todoService.getTasks();
  }

  getCompleteButtonText(task) {
    if (task.isComplete) {
      return 'Redo';
    }
    return 'Complete';
  }

}
