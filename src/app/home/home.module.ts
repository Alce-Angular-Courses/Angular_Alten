import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludarComponent } from './saludar/saludar.component';
import { SaludarLocalComponent } from './saludar-local/saludar-local.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    SaludarComponent,
    SaludarLocalComponent]
})
export class HomeModule { }
