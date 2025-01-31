import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environments';
import { Item } from '../../items/models/item.model';
import { ShoppingCar } from '../models/shopping_car.model';
import { ShoppingCarItem } from '../models/shopping_car_item.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCarService {
  private itemsSubject = new BehaviorSubject<number>(0);
  items$ = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.updateItemsCount();
  }

  addItemToShoppingCar(product: Item) {
    let shoppingCar: ShoppingCar = this.getShoppingCarFromLocalStorage();

    const existingItem = shoppingCar.shoppingCarItems.find(
      (item) => item.item.id === product.id
    );

    if (existingItem) {
      existingItem.amount += 1;
    } else {
      const shoppingCarItem: ShoppingCarItem = {
        item: product,
        amount: 1,
      };
      shoppingCar.shoppingCarItems.push(shoppingCarItem);
    }

    shoppingCar.totalPrice = this.calculateTotalPrice(shoppingCar);
    this.saveShoppingCarToLocalStorage(shoppingCar);
    this.updateItemsCount(); 
  }

  getTotalItems(): number {
    const shoppingCar = this.getShoppingCarFromLocalStorage();
    return shoppingCar.shoppingCarItems.reduce(
      (total, item) => total + item.amount,
      0
    );
  }

  private getShoppingCarFromLocalStorage(): ShoppingCar {
    if (typeof localStorage !== 'undefined') {
      const carList = localStorage.getItem('shoppingCar');
      if (carList) {
        return JSON.parse(carList);
      }
    }
    return { shoppingCarItems: [], totalPrice: 0 };
  }

  private saveShoppingCarToLocalStorage(shoppingCar: ShoppingCar) {
    localStorage.setItem('shoppingCar', JSON.stringify(shoppingCar));
  }

  private calculateTotalPrice(shoppingCar: ShoppingCar): number {
    return shoppingCar.shoppingCarItems.reduce(
      (total, item) => total + item.item.item_price * item.amount,
      0
    );
  }

  private updateItemsCount() {
    const totalItems = this.getTotalItems();
    this.itemsSubject.next(totalItems);
  }
}
