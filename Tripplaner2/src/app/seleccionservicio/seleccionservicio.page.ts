import { Component, OnInit } from '@angular/core';
import { SeleccionservicioService } from './seleccionservicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seleccionservicio',
  templateUrl: './seleccionservicio.page.html',
  styleUrls: ['./seleccionservicio.page.scss'],
})
export class SeleccionservicioPage implements OnInit {
  public nombreUsuario: any;
  public datosHoteles: any;
  public datosGastronomia: any;
  public datosExcursiones: any;
  public datosMovilidades: any;
  public ciudad: any;


  constructor(private router: Router, private seleccionservicio: SeleccionservicioService) {}


  ngOnInit() {
    this.nombreUsuario = localStorage.getItem("nombreUsuarioSesion");
    this.ciudad = localStorage.getItem("ciudad");
    console.log(this.ciudad)
    /* let idCiudad=this.router.getCurrentNavigation().extras;
 */


    this.seleccionservicio.solicitarServicios(this.ciudad, 11).subscribe((data: any) => {
      this.datosHoteles = data;
    });


    this.seleccionservicio.solicitarServicios(this.ciudad, 10).subscribe((data: any) => {
      this.datosGastronomia = data;
    });


    this.seleccionservicio.solicitarServicios(this.ciudad, 8).subscribe((data: any) => {
      this.datosExcursiones = data;
    });


    this.seleccionservicio.solicitarServicios(this.ciudad, 9).subscribe((data: any) => {
      this.datosMovilidades = data;
    });


  }
}
