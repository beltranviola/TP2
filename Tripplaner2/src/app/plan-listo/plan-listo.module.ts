import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanListoPageRoutingModule } from './plan-listo-routing.module';

import { PlanListoPage } from './plan-listo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanListoPageRoutingModule
  ],
  declarations: [PlanListoPage]
})
export class PlanListoPageModule {}
