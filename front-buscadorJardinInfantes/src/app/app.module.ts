import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';


import { ResultsComponent } from './results.component';
import { AppComponent } from './app.component';
import { BuscadorComponent } from '../buscador/buscador.component';
import { JardinService } from './jardines.service';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: 'buscador', component: BuscadorComponent },
      { path: 'resultados', component: ResultsComponent }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JardinService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
