import { Component, OnInit } from '@angular/core';
import { InicioDeSesionService} from './inicio-de-sesion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.page.html',
  styleUrls: ['./inicio-de-sesion.page.scss'],
})
export class InicioDeSesionPage implements OnInit {


  public Email:any;
  public Contra:any;
  public DatosSesion:any=[];


  constructor(private InicioS: InicioDeSesionService, private router: Router) { }


  ngOnInit() {}


    IniciarSesion(){


    this.DatosSesion=[];
    this.DatosSesion.push(this.Email,this.Contra)
    this.InicioS.comprobarusuario(this.DatosSesion).subscribe(data =>{
    if (Array.isArray(data) && data.length > 0)
    {


      localStorage.setItem("EmailusuarioSesion",data[0].Email)
      localStorage.setItem("nombreUsuarioSesion",data[0].Nombre)


     


      if (data[0].TipoUsuario["data"][0]==1){
        this.router.navigate(['/menu']);
      }
      else{
        this.router.navigate(['/menu']);
      }


    }
    else{
      alert("email o contraseña erroneos")
    }
   


  })
}


}
