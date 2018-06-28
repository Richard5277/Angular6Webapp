import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBar } from './NavBar/navbar.component';
import { ShoppingList } from './Content/ShoppingList/shoppinglist.component';
import { Footer } from './Footer/footer.component';
import { RecipeBook } from './Content/Recipe/recipe.component';
import { RecipeList } from './Content/Recipe/RecipeList/recipelist.componnet';
import { RecipeDetail } from './Content/Recipe/RecipeDetial/recipeDetail.component';
import { RecipeItem } from './Content/Recipe/RecipeList/RecipeItem/recipeItem.component';
import { ShoppingEdit } from './Content/ShoppingList/ShoppingEdit/shoppingEdit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    ShoppingList,
    Footer,
    RecipeBook,
    RecipeList,
    RecipeItem,
    RecipeDetail,
    ShoppingEdit
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
