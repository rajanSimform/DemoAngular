import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Undhiyu Chapdi',
      'Fav kathiywadi Dish, also known as TAVO',
      'https://3.bp.blogspot.com/-RJ7n9Xrs6HU/XlXYfgd1-QI/AAAAAAAAv_g/HHu3mFTeENw19NlEWqssN98c3u-w2b2qgCK4BGAYYCw/s1600/IMG_0866-002.jpg'
    ),
    new Recipe(
      'Undhiyu Chapdi',
      'Fav kathiywadi Dish, also known as TAVO',
      'https://3.bp.blogspot.com/-RJ7n9Xrs6HU/XlXYfgd1-QI/AAAAAAAAv_g/HHu3mFTeENw19NlEWqssN98c3u-w2b2qgCK4BGAYYCw/s1600/IMG_0866-002.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
