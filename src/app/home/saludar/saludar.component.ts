import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alt-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {
  titulo: string;
  empresa: string;
  nombre: string;
  isEsp: boolean;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Saludar';
    this.empresa = 'https://www.alten.es';
    this.nombre = 'Pepe';
    this.isEsp = true;
  }

  borrar (event, n) {
    console.dir(event);
    console.log(n);
  }

}
