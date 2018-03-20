import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';


import { ResultsComponent } from './results.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: 'results', component: ResultsComponent }]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
