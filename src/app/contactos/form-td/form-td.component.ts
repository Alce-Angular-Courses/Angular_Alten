import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactoIF, ContactoModel } from '../../models/contactos.model';

@Component({
  selector: 'alt-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  contacto: ContactoIF;
  cursos: Array<any>;
  @ViewChild('form') form: any;

  constructor() {}

  ngOnInit() {
    this.contacto = new ContactoModel();
    this.cursos = [
      {content: 'Angular', code: 'A01'},
      {content: ' React', code: 'R01'},
      {content: 'NodeJS', code: 'N01'}
    ];
    this.contacto.curso = this.cursos[2];
  }
  onEnviar(event) {
    event.preventDefault();
    console.table(this.contacto);
    console.dir(this.form);

  }
}
