import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('Masala Chai', 'Refreshing Tea', 'http://dassana.cdnrecipes.netdna-cdn.com//wp-content/uploads/2016/06/masala-tea-recipe.jpg', []),
    new Recipe('Oats Recipe', 'Oats Refresher', 'http://dassana.cdnrecipes.netdna-cdn.com//wp-content/uploads/2016/06/oats-uttapam-recipe.jpg', [])
 ];
  @Output() recipeSelected=new EventEmitter<Recipe>();
  
  constructor() { }
  
  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
