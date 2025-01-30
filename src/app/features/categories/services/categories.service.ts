import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environments';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  httpUrl = `${environment.API_URL}/category`;

  getAll() {
    return this.http.get<Array<Category>>(`${this.httpUrl}?select=*`);
  }
}
