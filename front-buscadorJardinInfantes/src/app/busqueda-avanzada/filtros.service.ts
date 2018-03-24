import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class FiltrosService {

    constructor() { }

    getResults(): Observable<Filtro[]> {
        return Observable.of([{
            nombre: 'Publico',
            value: false
        }, {
            nombre: 'Privado',
            value: false
        }, {
            nombre: "Laico",
            value: false
        }])
    }


}