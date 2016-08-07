import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Recipe } from './recipe';
import {Ingredient} from '../shared'
@Injectable()
export class RecipeService {
recipesChanged = new EventEmitter<Recipe[]>();
private recipes: Recipe[]=[
    new Recipe('Masala Chai', 'Refreshing Tea', 'http://dassana.cdnrecipes.netdna-cdn.com//wp-content/uploads/2016/06/masala-tea-recipe.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Oats Recipe', 'Oats Refresher', 'http://dassana.cdnrecipes.netdna-cdn.com//wp-content/uploads/2016/06/oats-uttapam-recipe.jpg', [])
 ];
  constructor(private http:Http) { }
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
  storeData(){
    const body= JSON.stringify(this.recipes);
    const headers=new Headers({
      'Content-Type' : 'application/json'
    });
    return this.http.put('https://recipebook-ce355.firebaseio.com/recipe.json', body, {headers:headers});
  }

  fetchData(){
    return this.http.get('https://recipebook-ce355.firebaseio.com/recipe.json')
                .map((response: Response) => response.json())
                .subscribe(
                  (data:Recipe[]) => {
                    this.recipes=data;
                    this.recipesChanged.emit(this.recipes);
                  }
                );
  }
}
