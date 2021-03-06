import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // another event as we have to go up two levels of components
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe #1', 'This is the description of recipe #1.', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/10/0/WU1712H_Cauliflower-Mac-and-Cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580140849133.jpeg'),
    new Recipe('Recipe #2', 'This is the description of recipe #2.', 'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }

}
