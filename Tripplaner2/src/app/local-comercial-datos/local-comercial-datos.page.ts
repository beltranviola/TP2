import { Component, OnInit } from '@angular/core';
import { LocalComercialDatosService } from './local-comercial-datos.service';




@Component({
  selector: 'app-local-comercial-datos',
  templateUrl: './local-comercial-datos.page.html',
  styleUrls: ['./local-comercial-datos.page.scss'],
})


export class LocalComercialDatosPage implements OnInit {
  public Nombre: any;
  public Precio: any;
  public Imagen: any;
  public Direccion:any;
  public CiudadId:any;
  public TipoServicioId:any;
  public ciudades:any;
  public datosProducto: any = [];
  public tiposervicio:any;


  constructor(private localcomercial: LocalComercialDatosService) {}


  ngOnInit() {
    this.localcomercial.TraerCiudades().subscribe(d => {
      this.ciudades=d;
    })


    this.localcomercial.TraerTServicios().subscribe(d => {
      this.tiposervicio=d;
    })
   
  }


  Cargarproducto() {
    this.datosProducto = [];
    alert(this.CiudadId)
    this.datosProducto.push(this.Nombre, this.Imagen, this.Direccion,this.Precio,this.CiudadId,this.TipoServicioId);
    this.localcomercial.Insertarproducto(this.datosProducto).subscribe(d => {
      alert('Datos añadidos correctamente');
      });
  }
}

