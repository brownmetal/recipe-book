import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';
import { ShoppingListComponent } from './shopping-list';
import { RecipeService} from './recipes';
@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent, RecipesComponent, ShoppingListComponent],
  providers:[RecipeService]
})
export class AppComponent {

}
