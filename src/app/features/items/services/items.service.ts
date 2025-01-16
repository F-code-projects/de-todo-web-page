import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environments';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  httpUrl = `${environment.API_URL}/item`;

  getItemByCategory() {
    return this.http.get<Array<Item>>(`${this.httpUrl}?category_id=eq.2347bc7a-b184-4753-81ac-710e3ec4128f&select=*`);
  }
}


