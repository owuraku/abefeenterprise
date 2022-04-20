import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddProduct } from '../interface/all-model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private productEndPoint = 'https://abefe-backend.herokuapp.com/products';
  private categoryEndPoint = 'https://abefe-backend.herokuapp.com/categories/';
  private addProductURl = 'https://abefe-backend.herokuapp.com/products';
  private getProductURl = 'https://abefe-backend.herokuapp.com/products';
  private updateProductURl = 'https://abefe-backend.herokuapp.com/products/';
  private addCategoryURL = 'https://abefe-backend.herokuapp.com/categories';
  private getCategoryURL = 'https://abefe-backend.herokuapp.com/categories/';
  private updateCategoryURL = 'https://abefe-backend.herokuapp.com/categories/';
  constructor(private http: HttpClient) {}
  addProduct(addProduct: AddProduct) {
    return this.http.post(this.productEndPoint, addProduct);
  }
  getProduct() {
    return this.http.get(this.productEndPoint);
  }
  updateProduct(id: number) {
    return this.http.patch(this.productEndPoint + '/' + id, null);
  }
  createCategory(name: string) {
    return this.http.post(this.categoryEndPoint, name);
  }
  getCategory(id: number) {
    return this.http.get(this.categoryEndPoint, { params: { id } });
  }
  updateCategory(id: number) {
    return this.http.patch(this.categoryEndPoint + '/' + id, null);
  }
}
