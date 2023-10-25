import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovilidadPageRoutingModule } from './movilidad-routing.module';

import { MovilidadPage } from './movilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovilidadPageRoutingModule
  ],
  declarations: [MovilidadPage]
})
export class MovilidadPageModule {}
