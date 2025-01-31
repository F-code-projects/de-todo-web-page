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

  getItemByCategory(categoryId: string) {
    let url = `${this.httpUrl}?category_id=eq.` + categoryId + `&select=*`
    return this.http.get<Array<Item>>(`${url}`);	
  }
}


