import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, orderBy, query } from '@angular/fire/firestore';
import { Category } from '../models/category.model';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private firestore: Firestore) { }

  async getMenu(): Promise<any> {
    const categoriesQuery = query(collection(this.firestore, 'categories'), orderBy('order'));
    const categoriesSnapshot = await getDocs(categoriesQuery);
    const menu = this.parseMenu(categoriesSnapshot.docs.map(categories => categories.data()));
    return menu;
  }

  parseMenu(categories: any): Category[] {
    return categories.map((category: any) => {
      return new Category(category.name, category.dishes.map((dish: any) => {
        return new Dish(dish.name, dish.price, dish.sundayOnly);
      }));
    });
  }
}
