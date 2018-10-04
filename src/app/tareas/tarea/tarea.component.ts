import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareaIf } from '../../models/tarea.model';

@Component({
  selector: 'alt-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() otarea: any;
  @Output() eventCompletar: EventEmitter<number>;
  @Output() eventBorrar: EventEmitter<number>;
  tarea: TareaIf;
  index: number;

  constructor() {
    this.eventCompletar = new EventEmitter();
    this.eventBorrar = new EventEmitter();
  }

  ngOnInit() {
    this.tarea =  Object.assign({}, this.otarea.item);
    this.index = this.otarea.i;

  }

  sendCompletado() {
    this.eventCompletar.emit(this.index);
  }

  sendBorrar() {
    this.eventBorrar.emit(this.index);
  }

}
