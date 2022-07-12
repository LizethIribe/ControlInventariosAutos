import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  url = 'http://localhost:3000/Api';
  constructor(private http: HttpClient) { }

  //Obtener registros
  getAutos(){
    return this.http.get(this.url);
  }

  //Obtener un registro
  getAuto(idA:string){
    return this.http.get(this.url + '/' + idA);
  }

  //Agregar un registro
  addAuto(auto:Autos){
    return this.http.post(this.url, auto);
  }

  //Eliminar un registro
  deleteAuto(idA:string){
      return this.http.delete(this.url + '/' + idA);
  }

  //Modificar un registro
  editAuto(auto:Autos){
    return this.http.put(this.url + '/' + auto.id_Auto, auto);
  }
}

export interface Autos {
  id_Auto?:string;
  nombre?:string;
  marca?:string;
  logo?:string;
}

