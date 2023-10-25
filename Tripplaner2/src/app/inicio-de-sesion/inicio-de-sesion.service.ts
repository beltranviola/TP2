import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class InicioDeSesionService {


  constructor(private http: HttpClient) { }
  comprobarusuario(DatosSesion=[]){
    return this.http.post('http://localhost:3001/buscarUsuario',{DatosSesion});
     }
 
}
