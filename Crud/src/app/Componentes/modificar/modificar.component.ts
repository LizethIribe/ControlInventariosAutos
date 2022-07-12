import { Component, OnInit } from '@angular/core';
import {Autos, AutosService} from '../../Servicio/autos.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})

export class ModificarComponent implements OnInit {
  Auto: Autos ={
    id_Auto:'',
    nombre:'',
    marca:'',
    logo:''
  };

  constructor(private AutosService:AutosService, 
              private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string> this.activeRoute.snapshot.params['id'];
    console.log('El id de entrada es: ' + id_entrada);

    if(id_entrada){
      this.AutosService.getAuto(id_entrada).subscribe(
        res => {
          this.Auto = res;
        },
        error => console.log(error)
      );
    }
  }

  //Modificar registro
  modificar(){
    this.AutosService.editAuto(this.Auto).subscribe({
      next:  res => {
        console.log(res);
      },
      error: error => console.log(error)
    });
    this.router.navigate(['/inicio']);
  }
}
