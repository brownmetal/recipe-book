import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from '../recipe.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[];
  
  @Output() recipeSelected=new EventEmitter<Recipe>();
  
  constructor(private recipeService:RecipeService){}
  
  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
