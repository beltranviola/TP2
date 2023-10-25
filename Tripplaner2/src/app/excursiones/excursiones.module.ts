import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcursionesPageRoutingModule } from './excursiones-routing.module';

import { ExcursionesPage } from './excursiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcursionesPageRoutingModule
  ],
  declarations: [ExcursionesPage]
})
export class ExcursionesPageModule {}
