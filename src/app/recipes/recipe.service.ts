import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
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
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addingredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
}
