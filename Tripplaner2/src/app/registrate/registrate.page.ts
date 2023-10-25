import { Component, OnInit } from '@angular/core';
import { RegistrateService} from './registrate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.page.html',
  styleUrls: ['./registrate.page.scss'],
})
export class RegistratePage implements OnInit {
  public Perfil:any;
  public Nombre:any;
  public Email:any;
  public Contra:any;
  public cuit:any;
  public datosEnviados:any=[];
  constructor(private registrateService: RegistrateService, private router: Router) { }


ngOnInit() {
 
}
registrarusuariocomun(){
  this.datosEnviados=[];
  this.datosEnviados.push(this.Nombre,this.Email,this.Contra)
   this.registrateService.Insertarusuariocomun(this.datosEnviados).subscribe(data =>{
   alert("Usuario registrado")
   this.router.navigate(['/inicio-de-sesion'])
   })
   
}


registrarusuariocomercial(){
  this.datosEnviados=[];
  this.datosEnviados.push(this.Nombre,this.Email,this.Contra,this.cuit)
  this.registrateService.Insertarusuariocomercial(this.datosEnviados).subscribe(data =>{
    alert("local registrado");  
    this.router.navigate(['/inicio-de-sesion'])
})
}
}
