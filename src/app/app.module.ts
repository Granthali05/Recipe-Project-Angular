import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ RecipeListComponent } from './recipes/recipe-list/recipe-list.component'
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RootComponent } from './Root/root.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Dropdowndirectives } from './dropdown.directive';
@NgModule({
  declarations: [
    Dropdowndirectives,
    AppComponent,
    HeaderComponent,
    RootComponent,
    RecipesComponent,
    RecipesDetailsComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeItemComponent
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
