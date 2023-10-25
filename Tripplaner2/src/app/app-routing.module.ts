import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  {
    path: 'seleccionservicio',
    loadChildren: () => import('./seleccionservicio/seleccionservicio.module').then( m => m.SeleccionservicioPageModule)
  },
  {
    path: 'registrate',
    loadChildren: () => import('./registrate/registrate.module').then( m => m.RegistratePageModule)
  },
  {
    path: 'inicio-de-sesion',
    loadChildren: () => import('./inicio-de-sesion/inicio-de-sesion.module').then( m => m.InicioDeSesionPageModule)
  },
  {
    path: 'plan-listo',
    loadChildren: () => import('./plan-listo/plan-listo.module').then( m => m.PlanListoPageModule)
  },
  {
    path: 'hospedaje',
    loadChildren: () => import('./hospedaje/hospedaje.module').then( m => m.HospedajePageModule)
  },
  {
    path: 'movilidad',
    loadChildren: () => import('./movilidad/movilidad.module').then( m => m.MovilidadPageModule)
  },
  {
    path: 'local-comercial-datos',
    loadChildren: () => import('./local-comercial-datos/local-comercial-datos.module').then( m => m.LocalComercialDatosPageModule)
  },
  {
    path: 'comidas',
    loadChildren: () => import('./comidas/comidas.module').then( m => m.ComidasPageModule)
  },
  {
    path: 'excursiones',
    loadChildren: () => import('./excursiones/excursiones.module').then( m => m.ExcursionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
