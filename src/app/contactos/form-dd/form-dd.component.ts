import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactoIF } from '../../models/contactos.model';

@Component({
  selector: 'alt-form-dd',
  templateUrl: './form-dd.component.html',
  styleUrls: ['./form-dd.component.css']
})
export class FormDdComponent implements OnInit {
  form: FormGroup;
  contacto: ContactoIF;

  constructor( ) { }

  ngOnInit() {
    this.form = new FormBuilder().group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: [''],
      email: [''],
      isOk: [false],
      turno: [''],
      curso: ['NodeJS']
    });
  }
  onSubmit(event) {
    event.preventDefault();
    // this.contacto =

  }
}
