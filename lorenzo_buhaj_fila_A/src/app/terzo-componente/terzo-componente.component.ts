import { Component } from '@angular/core';
import { QuartoComponenteComponent } from '../quarto-componente/quarto-componente.component';

@Component({
  selector: 'app-terzo-componente',
  imports: [QuartoComponenteComponent],
  templateUrl: './terzo-componente.component.html',
  styleUrl: './terzo-componente.component.css'
})
export class TerzoComponenteComponent {

}
