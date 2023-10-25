import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalComercialDatosPageRoutingModule } from './local-comercial-datos-routing.module';

import { LocalComercialDatosPage } from './local-comercial-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalComercialDatosPageRoutingModule
  ],
  declarations: [LocalComercialDatosPage]
})
export class LocalComercialDatosPageModule {}
