import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {

  @Input() tasksToDisplay: Array<Object>;
  @Output() taskCompleted = new EventEmitter();
  @Output() taskDeleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  completeTask(index) {
    this.taskCompleted.emit(index);
  }

  deleteTask(index) {
    this.taskDeleted.emit(index);
  }

  getCompleteButtonText(task) {
    if (task.isComplete) {
      return 'Redo';
    }
    return 'Complete';
  }

}
