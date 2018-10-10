import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { FormDdComponent } from './form-dd/form-dd.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactosRoutingModule
  ],
  declarations: [ContactosComponent, FormDdComponent, FormTdComponent]
})
export class ContactosModule { }
