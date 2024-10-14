import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwa';
    deferredPrompt: any;

  constructor() {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault(); // Evita que el navegador muestre el prompt automáticamente
      this.deferredPrompt = event; // Guarda la referencia al evento para usarla más tarde
    });
  }


  showInstallPrompt() {
    // Mostrar el botón o modal para instalar la PWA
    this.deferredPrompt.prompt();
    this.deferredPrompt = null; // Reiniciar la variable para la próxima vez
  }
}
