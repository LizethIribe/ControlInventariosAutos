import { Component, OnInit } from '@angular/core';
import {Autos, AutosService} from '../../Servicio/autos.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [AutosService] 
})
export class InicioComponent implements OnInit {

  //Variables
  ListarAutos: Autos[] = [];

  constructor(private AutosService:AutosService, private router:Router) { }

  ngOnInit(): void {
    this.listarAutos();
  }

  //Obetener listado de Autos
  listarAutos(){
    this.AutosService.getAutos().subscribe({
      next: res => {
        console.log(res)
        this.listarAutos = <any> res;
      },
      error: error => console.log(error)
    });     
  }

  //Eliminar
  eliminar(Auto:Autos){
    if(Auto.id_Auto != undefined){
      console.log(Auto.id_Auto);
    this.AutosService.deleteAuto(Auto.id_Auto).subscribe({
      next: res=>{
        console.log('Registro eliminado correctamente');
        this.listarAutos();
      },
       error: error => console.log(error)
      });
    }

  }

  //Modificar
  modificar(Auto:Autos){
    this.router.navigate(['/edit/' + Auto.id_Auto]);
  }
}
  