import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovilidadPage } from './movilidad.page';

const routes: Routes = [
  {
    path: '',
    component: MovilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovilidadPageRoutingModule {}
