import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ItemsService } from '../../items/services/items.service';
import { Item } from '../../items/models/item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    CommonModule,
    SelectButtonModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './category.page.component.html',
  styleUrl: './category.page.component.css',
})
export class CategoryPageComponent {
  layout: 'list' | 'grid' = 'grid';
  categoryId: string = '';

  items = signal<any>([]);

  options = ['list', 'grid'];

  constructor(
    private itemService: ItemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryId = params.get('categoryId') || '';
      console.log(this.categoryId);
      this.itemService.getItemByCategory(this.categoryId).subscribe((data) => {
        console.log(data);
        this.items.set([...data.slice(0, 12)]);
      });
    });
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

  getInventoryStatus(item: Item) {
    if (item.item_amount > 10) {
      return 'En Stock';
    } else if (item.item_amount > 0 && item.item_amount <= 10) {
      return 'Ultimo productos';
    } else if (item.item_amount === 0) {
      return 'Agotado';
    }

    return '';
  }
}
