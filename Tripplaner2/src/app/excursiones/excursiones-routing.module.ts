import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcursionesPage } from './excursiones.page';

const routes: Routes = [
  {
    path: '',
    component: ExcursionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcursionesPageRoutingModule {}
