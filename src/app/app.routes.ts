import { Routes } from '@angular/router';
import { CategoryPageComponent } from './features/categories/pages/category.page.component';

export const routes: Routes = [
    { path: 'category/:categoryId', component: CategoryPageComponent },
];
