import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list';
import { Subscription } from 'rxjs/Rx';
import { RecipeService } from '../recipe.service';
@Component({
  moduleId: module.id,
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy  {
  selectedRecipe: Recipe; 
  private recipeIndex:number;
  private subscription:Subscription;
  constructor(private sls:ShoppingListService, 
              private router:Router, 
              private route: ActivatedRoute,
              private recipeService:RecipeService) { }
  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
  ngOnInit() {
    this.subscription=this.route.params.subscribe(
      (params:any)=>{
        this.recipeIndex=params['id'];
        this.selectedRecipe=this.recipeService.getRecipe(this.recipeIndex);
      }
    );
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
