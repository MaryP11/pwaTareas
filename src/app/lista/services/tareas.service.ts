import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  tareas: string [] =[];

  constructor() { }


  agregarTareas(tarea: string){
    this.tareas.push(tarea);

  }

  borrarTareas(indice: number){
    this.tareas.splice(indice, 1);

  }



}
