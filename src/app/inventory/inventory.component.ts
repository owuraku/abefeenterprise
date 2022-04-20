import { Component, OnInit } from '@angular/core';
export interface InventoryDetails {
  product: string;
  category: string;
  stock: number;
}

export interface PaymentDetails {
  date: string;
  item: string;
  quantity: number;
  price: number;
}

export interface StockDetails {
  date: string;
  balanceBefore: number;
  balanceAfter: number;
  description: string;
}
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  inventory: InventoryDetails[] = [];

  paymentDetails: PaymentDetails[] = [];
  paymentDetail: PaymentDetails | undefined;
  stockDetails: StockDetails[] = [];
  stockDetail: StockDetails | undefined;
  paymentDetailsDialog: boolean = false;
  stockDetailsDialog: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.inventory = [{ product: 'Milo', category: 'provision', stock: 100 }];
    this.paymentDetails = [
      { date: '10-08-2022', item: 'Milo', quantity: 5, price: 10 },
    ];
  }
  viewStock(stockDetails: StockDetails) {
    this.stockDetail = { ...stockDetails };
    this.stockDetailsDialog = true;
  }

  updateStock(paymentDetails: PaymentDetails) {
    this.paymentDetail = { ...paymentDetails };
    this.paymentDetailsDialog = true;
  }
}
