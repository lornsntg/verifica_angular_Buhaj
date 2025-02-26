import { Component } from '@angular/core';
import { TerzoComponenteComponent } from '../terzo-componente/terzo-componente.component';

@Component({
  selector: 'app-secondo-componente',
  imports: [TerzoComponenteComponent],
  templateUrl: './secondo-componente.component.html',
  styleUrl: './secondo-componente.component.css'
})
export class SecondoComponenteComponent {

}
