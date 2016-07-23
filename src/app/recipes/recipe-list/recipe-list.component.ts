import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[];
  recipe=new Recipe('Dummy', 'Dummy', 'https://image.freepik.com/free-icon/crash-testing-dummy-silhouette_318-49965.jpg');
  constructor() { }
  
  ngOnInit() {
  }

}
