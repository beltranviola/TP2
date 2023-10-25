import { Component, OnInit } from '@angular/core';
import { CrearViajeService } from './crear-viaje.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {


  public destino:any;
  public ciudad: any;


  constructor(private cv: CrearViajeService,private router: Router) { }


  ngOnInit() {
  }
 
 crearplan(){
  console.log('ciudades')
  localStorage.setItem("ciudad", JSON.stringify(this.ciudad));
  this.router.navigate(['/seleccionservicio'])
 }


}

