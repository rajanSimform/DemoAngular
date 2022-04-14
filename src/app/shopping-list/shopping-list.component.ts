import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredent.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 15),
    new Ingredient('Mango', 5),
  ];
  constructor() {}

  ngOnInit(): void {}
}
