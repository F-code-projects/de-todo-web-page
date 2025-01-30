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
    CategoryPageComponent,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {

  categories = signal<any>([]);
  

  constructor(private categoryService: CategoriesService) {}

  ngOnInit() {
    this.categoryService.getAll().subscribe((data) => {
      this.categories.set([...data]);
    });
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
}
}
