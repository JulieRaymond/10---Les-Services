import {Component} from '@angular/core';
import {CocktailService} from "../service/cocktail.service";
import {Cocktail} from '../models/Cocktail.model';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) {
  }

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
