import { categoryURl } from './../constant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from '../category/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  addCategory(name: any) {
    return this.http.post(categoryURl, name);
  }

  editCategory(id: string, editedCategory: Category) {
    return this.http.patch(categoryURl + '/' + id, editedCategory);
  }
  getCategory() {
    return this.http.get(categoryURl);
  }
  deleteCategory(id: number) {
    return this.http.delete(categoryURl + '/' + id);
  }
}
