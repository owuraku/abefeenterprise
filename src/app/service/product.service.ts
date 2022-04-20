import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditProductDetails, ProductDetails } from '../product/product.model';
import { productURl } from '../constant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProduct() {
    return this.http.get(productURl);
  }
  addProduct(product: ProductDetails) {
    return this.http.post(productURl, product);
  }
  updateProduct(id: string, editProductDetails: any) {
    return this.http.patch(productURl + '/' + id, editProductDetails);
  }
}
