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
    console.log("CATEGORY" + categoryId)
    let url = `${this.httpUrl}?category_id=eq.` + categoryId + `&select=*`
    console.log(url)
    return this.http.get<Array<Item>>(`${url}`);	
  }
}


