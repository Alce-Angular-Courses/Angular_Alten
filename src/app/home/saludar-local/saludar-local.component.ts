import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'alt-saludar-local',
  templateUrl: './saludar-local.component.html',
  styleUrls: ['./saludar-local.component.css']
})
export class SaludarLocalComponent implements OnInit {
  @ViewChild ('locNombre') nombre: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.dir(this.nombre);
    this.nombre.nativeElement.value = 'Pepe';
  }

}
