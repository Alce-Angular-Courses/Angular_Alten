import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LogoComponent } from './logo/logo.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CabeceraComponent, LogoComponent, PieComponent, MenuComponent],
  exports: [CabeceraComponent, PieComponent, MenuComponent]
})
export class CoreModule { }
