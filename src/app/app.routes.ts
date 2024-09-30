import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { RecetarioComponent } from './recetario/recetario.component';

export const routes: Routes = [
  {
    path: 'recetario',
    component: RecetarioComponent
  } ,
  {
    path: '**',
    component: ListaComponent
  } 
];
