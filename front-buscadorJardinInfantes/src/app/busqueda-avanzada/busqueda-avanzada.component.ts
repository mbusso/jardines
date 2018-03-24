import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FiltrosService } from './filtros.service';

@Component({
    selector: 'app-busquedaAvanzada',
    templateUrl: './busqueda-avanzada.component.html'
})
export class BusquedaAvanzadaComponent implements OnInit {

    filtros: Filtro[]

    constructor(private filtroService: FiltrosService) { }


    ngOnInit() {
        this.filtroService.getResults().subscribe((filtros: Filtro[]) => {
            this.filtros = filtros;
        });
    }

    updateResultados() {
        const filtrosAplicados = this.filtros.filter((x:Filtro) => x.value).map((x:Filtro) => x.nombre);
        //TODO: HACER REQUEST AL SERVER Y ACTUALIZAR RESULTADOS
    }


}