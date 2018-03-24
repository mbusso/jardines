import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class JardinService {

  constructor() { }

    getResults(): Observable<Jardin[]> {
        return Observable.of([ {
            nombre: 'pepe1',
            direccion: 'direcccion'
        }, {
            nombre: 'pepe3',
            direccion: 'dir3'
        }])
    }


}