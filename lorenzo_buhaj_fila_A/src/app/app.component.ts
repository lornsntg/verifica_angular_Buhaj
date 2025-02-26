import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondoComponenteComponent } from './secondo-componente/secondo-componente.component';
import { TerzoComponenteComponent } from './terzo-componente/terzo-componente.component';
import { QuartoComponenteComponent } from './quarto-componente/quarto-componente.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SecondoComponenteComponent, TerzoComponenteComponent, QuartoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lorenzo_buhaj_fila_A';
}
