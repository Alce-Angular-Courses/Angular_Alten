import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alt-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  title: string;

  constructor() {
  }

  ngOnInit() {
     this.title = 'Alten';
  }

}
