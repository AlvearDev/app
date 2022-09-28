import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  constructor() { }
  createDb() {
    return {
      cities: [
        {
          id: 1,
          name: 'Barranquilla',
          department: 'Atlantico'
        },
        {
          id: 2,
          name: 'Astrea',
          department: 'Cesar'
        },
        {
          id: 3,
          name: 'Cienega',
          department: 'Magdalena'
        },
        {
          id: 4,
          name: 'Puerto Colombia',
          department: 'Atlantico'
        },
        {
          id: 5,
          name: 'Malombo',
          department: 'Atlantico'
        },
        {
          id: 6,
          name: 'Santa Marta',
          department: 'Magdalena'
        },
        {
          id: 7,
          name: 'Valledupar',
          department: 'Cesar'
        },
        {
          id: 8,
          name: 'Aguachica',
          department: 'Cesar'
        },
        {
          id: 9,
          name: 'El paso',
          department: 'Cesar'
        },
        
        
      ]
    };
  }
}
