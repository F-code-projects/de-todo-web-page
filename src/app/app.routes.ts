import { Routes } from '@angular/router';
import { CategoryPageComponent } from './features/categories/pages/category.page.component';
import { ShoppingCarPageComponent } from './features/shopping_car/pages/shopping-car.page.component';

export const routes: Routes = [
    { path: 'category/:categoryId', component: CategoryPageComponent },
    { path: 'shoppingCar', component: ShoppingCarPageComponent },
];
