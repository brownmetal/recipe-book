import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';
@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  isAdd=true;
  @Input() item:Ingredient;
  @Output() cleared= new EventEmitter();
  ngOnChanges(change){
    if (change.item.currentValue === null){
        this.isAdd=true;
        this.item={name:null, amount:null};
    } else {
      this.isAdd=false
    }
  }
  constructor(private sls:ShoppingListService) { }

  ngOnInit() {
  }
  onSubmit(ingredient:Ingredient){
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd){
      this.sls.editItem(this.item, newIngredient);
      this.onClear();
    } else {
        this.item= newIngredient;
        this.sls.addItem(this.item); 
      }
  }
  onDelete(){
    this.sls.deleteItem(this.item);
    this.onClear(); 
  }
  onClear(){
    this.isAdd=true;
    this.cleared.emit(null); 
  }
}
