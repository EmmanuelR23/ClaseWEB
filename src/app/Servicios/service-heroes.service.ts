import { Injectable } from '@angular/core';

export interface Heroes {
  id: number, name: string
} 

@Injectable({
  providedIn: 'root'
})
export class ServiceHeroesService {

    private heroes : Heroes[]  = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
  
    public getHeroes  = () : Array<Heroes> => {
      return this.heroes;
    }
  
  constructor() { }
}
