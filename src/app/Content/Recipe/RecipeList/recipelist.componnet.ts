import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model';

@Component({
  selector: 'RecipeList',
  templateUrl:'./recipelist.component.html'
})
export class RecipeList {
  
  recipes: Recipe[] = [
    new Recipe('R-1', 'some simple recipe', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
    new Recipe('R-2', 'nice recipe', 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg')
  ]
  
  constructor(){

  }

  onInit(){

  }

}