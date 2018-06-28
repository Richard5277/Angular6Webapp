import { Component, OnInit } from '@angular/core'
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'ShoppingList',
  templateUrl:'./shoppinglist.component.html'
})
export class ShoppingList {

  ingredients: Ingredient[] = [
    new Ingredient('apple', 1),
    new Ingredient('banana', 2),
    new Ingredient('avocado', 1)
  ]

  constructor(){
    console.log('=> constructor');
  }

  ogOnInit(){
    console.log('=> on init');
    
  }


}