import {Injectable} from '@angular/core';
import {Cocktail} from "../models/Cocktail.model";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  constructor() {
  }

  getCocktails(): Cocktail[] {
    return [
      {name: 'Mojito', price: 8.5, image: 'mojito.jpeg'},
      {name: 'Cosmopolitan', price: 9.0, image: 'cosmopolitan.jpeg'},
      {name: 'Pina Colada', price: 7.5, image: 'pinaColada.jpeg'},
      {name: 'Bloody Mary', price: 8.5, image: 'bloodyMary.jpeg'},
    ];
  }
}
