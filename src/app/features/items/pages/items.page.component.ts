import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ItemsService } from '../services/items.service';
import { Item } from '../models/item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items-page',
  standalone: true,
  imports: [DataViewModule, TagModule, CommonModule, SelectButtonModule, FormsModule],
  templateUrl: './items.page.component.html',
  styleUrl: './items.page.component.css',
})
export class ItemsPageComponent {
  layout: 'list' | 'grid' = 'list';

  items = signal<any>([]);

  options = ['list', 'grid'];

  constructor(private itemService: ItemsService) {}

  ngOnInit() {
    this.itemService.getItemByCategory().subscribe((data) => {
      this.items.set([...data.slice(0, 12)]);
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
}
