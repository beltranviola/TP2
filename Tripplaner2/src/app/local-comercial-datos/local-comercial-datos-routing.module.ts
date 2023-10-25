import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalComercialDatosPage } from './local-comercial-datos.page';

const routes: Routes = [
  {
    path: '',
    component: LocalComercialDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalComercialDatosPageRoutingModule {}
