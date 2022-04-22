import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productURl } from '../constant';
import { UpdateStockDetail } from '../inventory/inventory.model';
@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private http: HttpClient) {}
  addStock(id: any, updateStockDetail: UpdateStockDetail) {
    return this.http.post(
      productURl + '/' + id + '/increase',
      updateStockDetail
    );
  }
  deductStock(id: string, updateStockDetail: UpdateStockDetail) {
    return this.http.post(
      productURl + '/' + id + '/decrease',
      updateStockDetail
    );
  }
  productHistory(id: string) {
    return this.http.get(productURl + '/' + id + '/history');
  }
}
