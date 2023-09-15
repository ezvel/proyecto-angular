import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: ITask = {
    title: "",
    description: "",
    completed: false,
    level: Levels.info
  };

  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  deleteTask(){
    this.delete.emit(this.task); //NOTIFICAMOS AL COMPONENTE SUPERIOR LA TAREA A ELIMINAR
  }

}
 