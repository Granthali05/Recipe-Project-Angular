import { Component, OnInit } from '@angular/core';
import { Ingredients } from './shopping-list.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[]=[
    new Ingredients('sugar',4),
    new Ingredients('rice',5),
    new Ingredients('rice',5)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientsAdded(ingredients:Ingredients){
    this.ingredients.push(ingredients);
  }

}
