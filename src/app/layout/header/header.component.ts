import { Component, OnInit, signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { CategoriesService } from '../../features/categories/services/categories.service';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from '../../features/categories/pages/category.page.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { get } from 'node:http';
import { ShoppingCarItem } from '../../features/shopping_car/models/shopping_car_item.model';
import { ShoppingCar } from '../../features/shopping_car/models/shopping_car.model';
import { ShoppingCarService } from '../../features/shopping_car/services/shopping_car.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    AvatarModule,
    BadgeModule,
    OverlayBadgeModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  categories = signal<any>([]);
  carAmount = 0;

  constructor(private categoryService: CategoriesService, private shoppingCarService: ShoppingCarService) {}

  ngOnInit() {
    this.getAllCategories();
    this.shoppingCarService.items$.subscribe(amount => {
      this.carAmount = amount;
    });
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe((data) => {
      this.categories.set([...data]);
    });
  }

  getCarList() {
    const shoppingCar = localStorage.getItem('shoppingCar');
    if (shoppingCar) {
      const sc: ShoppingCar = JSON.parse(shoppingCar);
      this.carAmount = sc.shoppingCarItems.length;
    }
  }

  updateCarAmount() {
    this.carAmount = this.shoppingCarService.getTotalItems();
  }

  load() {
    console.log('load');
  }
}
