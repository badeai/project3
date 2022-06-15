import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://img.delicious.com.au/Whdi4i8g/w759-h506-cfill/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
      [new Ingredient('Meat', 1), new Ingredient('frech fries', 20)]
    ),
    new Recipe(
      'Another test recipe',
      'This is simply a test',
      'https://img.delicious.com.au/Whdi4i8g/w759-h506-cfill/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 20)]
    ),
  ];
  getRecipe() {
    return this.recipes.slice();
  }
}
