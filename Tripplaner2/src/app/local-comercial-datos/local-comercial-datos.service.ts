import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LocalComercialDatosService {


  constructor(private http: HttpClient) { }


  Insertarproducto(datosProducto: any[]){
  return this.http.post('http://localhost:3001/Cargarproducto',{datosProducto});
   }


   TraerCiudades(){
    return this.http.get('http://localhost:3001/obtenerciudades');
     }


     TraerTServicios(){
      return this.http.get('http://localhost:3001/obtenertiposervicio');
       }


   
}
