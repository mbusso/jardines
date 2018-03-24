import { Component, OnInit } from '@angular/core';
import { JardinService } from './jardines.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

  jardines: Jardin[]

  constructor(private jardinService: JardinService) {}

  ngOnInit() {
    this.jardinService.getResults().subscribe((jardines: Jardin[]) => {
        this.jardines = jardines;
    });
  }

}
