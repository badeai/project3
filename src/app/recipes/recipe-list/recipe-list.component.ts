import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
      [new Ingredient('Meat', 1), new Ingredient('frech fries', 20)]
    ),
  ];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
