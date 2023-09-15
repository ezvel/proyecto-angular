import { Component } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  task1: ITask = {
    title: "Task 1",
    description: "Description 1",
    completed: false,
    level: Levels.info
  }

  task2: ITask = {
    title: "Task 2",
    description: "Description 2",
    completed: false,
    level: Levels.info
  }

  deleteTask(task: ITask) {
    //TODO Sustitur por un splice para eliminar la lista de tarea
    alert("Eliminar la tarea: " + task.title);
  }

}
