import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';


import { ResultsComponent } from './resultados/results.component';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { JardinService } from './resultados/jardines.service';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';
import { FiltrosService } from './busqueda-avanzada/filtros.service';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: 'buscador', component: BuscadorComponent },
      { path: 'resultados', component: ResultsComponent },
      { path: 'busqueda-avanzada', component: BusquedaAvanzadaComponent },

    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    ResultsComponent,
    BusquedaAvanzadaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JardinService, FiltrosService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
