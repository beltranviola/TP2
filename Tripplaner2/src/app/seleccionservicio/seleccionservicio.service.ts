import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SeleccionservicioService {
  constructor(private http: HttpClient) { }


  solicitarServicios(ciudadId: number, tipoServicioId: number) {
    return this.http.get(`http://localhost:3001/obtenerServiciosPorTipo?ciudadId=${ciudadId}&tipoServicioId=${tipoServicioId}`);
  }  
}

