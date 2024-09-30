import { Component } from '@angular/core';

@Component({
  selector: 'app-instrucciones',
  standalone: true,
  imports: [],
  templateUrl: './instrucciones.component.html',
  styleUrl: './instrucciones.component.css'
})
export class InstruccionesComponent {



recetas:any[] = [
  {
    name: 'Carlota de Granada',
    image: 'https://cdn7.kiwilimon.com/recetaimagen/41197/55825.jpg',
    description: 'Un postre sin horno, la Carlota de Granada es fresca, cremosa y perfecta para sorprender a tu familia.',
    ingredients: [
      "1 lata de leche condensada",
      "1 lata de leche evaporada",
      "190 gramos de queso crema",
      "1/2 taza de jugo de granada",
      "2 paquetes de galletas Marías",
      "1 taza de semillas de granada"
    ],
    recipe: 'Licúa las leches, queso y jugo. Capa de galletas y mezcla en un molde, refrigera 4 horas y decora con granada.'
  },
  {
    name: 'Crema de Zanahoria',
    image: 'https://cdn-geocp.nitrocdn.com/fDFrSSYWfGItWOEZGsrBIHnCqgylYQCG/assets/images/optimized/rev-12cb08d/www.nutrioli.com/wp-content/uploads/2024/08/crema-de-zanahorias-401x291.jpg', // Asegúrate de que esta imagen es correcta
    description: 'Una deliciosa crema de zanahoria, perfecta para disfrutar como entrada o plato principal.',
    ingredients: [
      "4 zanahorias medianas, peladas y picadas",
      "1 papa mediana, pelada y picada",
      "1 cebolla, picada",
      "2 cucharadas de aceite de oliva",
      "4 tazas de caldo de verduras",
      "Sal y pimienta al gusto",
      "Crema agria y perejil para decorar"
    ],
    recipe: 'Sofríe la cebolla en el aceite. Agrega zanahorias y papa, cocina por unos minutos. Añade caldo, cocina hasta que estén tiernas. Licúa, sazona y sirve con crema y perejil.'
  },
  {
    name: 'Hotcakes de Plátano',
    image: 'https://cdn-geocp.nitrocdn.com/fDFrSSYWfGItWOEZGsrBIHnCqgylYQCG/assets/images/optimized/rev-12cb08d/www.nutrioli.com/wp-content/uploads/2024/08/hot-cakes-de-platano-y-avena-con-manzana-401x291.jpg', // Asegúrate de que esta imagen es correcta
    description: 'Deliciosos y esponjosos hotcakes de plátano, perfectos para el desayuno.',
    ingredients: [
      "1 plátano maduro",
      "1 huevo",
      "1 taza de harina de trigo",
      "1 cucharada de polvo para hornear",
      "1 taza de leche",
      "2 cucharadas de aceite",
      "Miel o jarabe al gusto"
    ],
    recipe: 'En un tazón, aplasta el plátano y mezcla con el huevo. Agrega la harina, polvo para hornear, leche y aceite. Cocina en un sartén caliente hasta que estén dorados. Sirve con miel o jarabe.'
  }
]


}
