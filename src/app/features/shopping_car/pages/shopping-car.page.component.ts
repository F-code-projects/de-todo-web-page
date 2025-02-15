import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { ShoppingCarService } from '../services/shopping_car.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../items/models/item.model';
import { ShoppingCar } from '../models/shopping_car.model';

@Component({
  selector: 'app-shopping-car.page',
  standalone: true,
  imports: [DataViewModule, CommonModule, CardModule],
  templateUrl: './shopping-car.page.component.html',
  styleUrl: './shopping-car.page.component.css',
})
export class ShoppingCarPageComponent {
  shoppingCar = signal<ShoppingCar>({ shoppingCarItems: [], totalPrice: 0 });

  options = ['list', 'grid'];

  constructor(
    private shoppingCarService: ShoppingCarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.shoppingCar.set(this.shoppingCarService.getShoppingCar());
  }

  getSeverity(item: Item) {
    if (item.item_amount > 10) {
      return 'success';
    } else if (item.item_amount > 0 && item.item_amount <= 10) {
      return 'warn';
    } else if (item.item_amount === 0) {
      return 'danger';
    } else {
      return null;
    }
  }

  addItemToShoppingCar(product: Item) {
    this.shoppingCarService.addItemToShoppingCar(product);
  }
}
