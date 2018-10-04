import { Component, OnInit } from '@angular/core';
import { TareaIf, TareaModel } from '../../models/tarea.model';

@Component({
  selector: 'alt-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit {

  aTareas: Array<TareaIf>;
  newTarea: TareaIf;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  addTarea (tarea) {
    this.aTareas.push(new TareaModel(tarea));
    console.log(this.aTareas);
  }

  changeTarea(i) {
    this.aTareas[i].isCompleted = !this.aTareas[i].isCompleted;
    console.log(this.aTareas);
  }

  deleteTarea(i) {
    this.aTareas.splice(i, 1);
    console.log(this.aTareas);
  }
}
