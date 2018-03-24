import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {
  searchValue: string

  constructor(private router: Router, private route: ActivatedRoute) { }


  buscar() {
    return this.router.navigate(['resultados'])
  }

  busquedaAvanzada() {
    return this.router.navigate(['busqueda-avanzada'])
  }
}