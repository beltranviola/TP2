import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RegistrateService {


  constructor(private http: HttpClient) { }


  Insertarusuariocomun(datosEnviados: any[]){
  return this.http.post('http://localhost:3001/insertar_usuario_comun',{datosEnviados});
   }


   Insertarusuariocomercial(datosEnviados: any[]){
    return this.http.post('http://localhost:3001/insertar_local',{datosEnviados});
  }
   
}
