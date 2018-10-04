import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'alt-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  newTarea: string;
  @Output() eventAdd: EventEmitter<string>;

  constructor() {
    this.eventAdd = new EventEmitter();
  }

  ngOnInit() {
  }

  sendAddTarea() {
    if (!this.newTarea) {return; }
    this.eventAdd.emit(this.newTarea);
    this.newTarea = '';
  }

}
