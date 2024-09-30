import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TareasService } from './services/tareas.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaComponent { 
  lista:string[] = [];
  form:FormGroup = new FormGroup(
    {text: new FormControl()}
  );

  constructor(
    private  service:TareasService
  ){
    this.lista = service.tareas;
  }

  agregarTareaALista(){
    console.log(this.lista)
    this.service.agregarTareas(this.form.value.text)
  }
  
  borrarTareaALista(indice: number){
    this.service.borrarTareas(indice)
  }
}
