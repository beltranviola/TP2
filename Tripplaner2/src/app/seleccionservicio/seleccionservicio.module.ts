import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionservicioPageRoutingModule } from './seleccionservicio-routing.module';

import { SeleccionservicioPage } from './seleccionservicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionservicioPageRoutingModule
  ],
  declarations: [SeleccionservicioPage]
})
export class SeleccionservicioPageModule {}
