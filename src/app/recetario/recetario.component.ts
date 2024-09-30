import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecetarioService } from './services/recetario.service';

interface Receta {
  nombre: string;
  proceso: string;
  imagen: string;
  leGusto: boolean;
}


@Component({
  selector: 'app-recetario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recetario.component.html',
  styleUrl: './recetario.component.css'
})
export class RecetarioComponent {

  recetas: any[] = [
  ];

  constructor(private recetarioService:RecetarioService){
    this.recetas = recetarioService.get(); 
  }

  toggleLike(receta: Receta) {
    receta.leGusto = !receta.leGusto;
  }
  
  get(){
    
    }
}
