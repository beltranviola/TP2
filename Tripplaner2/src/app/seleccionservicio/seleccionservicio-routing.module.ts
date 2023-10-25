import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionservicioPage } from './seleccionservicio.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionservicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionservicioPageRoutingModule {}
