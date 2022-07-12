import { Component, OnInit } from '@angular/core';
import {Autos, AutosService} from '../../Servicio/autos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {
  auto: Autos ={
    id_Auto:'',
    nombre:'',
    marca:'',
    logo:''
  };

  constructor(private AutosService:AutosService, private router:Router) { }

  ngOnInit(): void {
  }

  //Agregar registro
  agregar(){
    delete this.auto.id_Auto;
    this.AutosService.addAuto(this.auto).subscribe();
    this.router.navigate(['/inicio']);
  }

}
