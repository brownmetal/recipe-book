import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[];
  recipe=new Recipe('Dummy', 'Dummy', 'https://image.freepik.com/free-icon/crash-testing-dummy-silhouette_318-49965.jpg');
  constructor() { }
  
  ngOnInit() {
  }

}
