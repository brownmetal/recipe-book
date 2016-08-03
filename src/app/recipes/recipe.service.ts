import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import {Ingredient} from '../shared'
@Injectable()
export class RecipeService {
private recipes: Recipe[]=[
    new Recipe('Masala Chai', 'Refreshing Tea', 'http://dassana.cdnrecipes.netdna-cdn.com//wp-content/uploads/2016/06/masala-tea-recipe.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Oats Recipe', 'Oats Refresher', 'http://dassana.cdnrecipes.netdna-cdn.com//wp-content/uploads/2016/06/oats-uttapam-recipe.jpg', [])
 ];
  constructor() { }
  getRecipes(){
    return this.recipes;
  }
  getRecipe(id:number){
    return this.recipes[id];
  }
  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }
  editRecipe(oldRecipe:Recipe , newRecipe:Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe; 
  }
}
