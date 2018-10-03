import { Component, OnInit } from '@angular/core';
import { TareaIf, TareaModel } from '../../models/tarea.model';

@Component({
  selector: 'alt-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {

  aTareas: Array<TareaIf>;
  newTarea: TareaIf;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
    // this.newTarea = {nombre: '', isCompleted: false };
    this.newTarea = new TareaModel();
  }

  addTarea () {
    if ( !this.newTarea.nombre) {return; }
    // this.aTareas.push(JSON.parse(JSON.stringify(this.newTarea)));
    this.aTareas.push(Object.assign({}, this.newTarea));
    this.newTarea.nombre = '';
    console.log(this.aTareas);
  }

  borrarTarea (i) {
    this.aTareas.splice(i, 1);
  }

  completado() {
    console.log(this.aTareas);
  }
}
