import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanListoPage } from './plan-listo.page';

const routes: Routes = [
  {
    path: '',
    component: PlanListoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanListoPageRoutingModule {}
