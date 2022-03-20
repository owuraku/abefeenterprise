import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  category: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Product[] = [];

  displayBasic: boolean = false;

  showBasicDialog() {
    this.displayBasic = true;
  }

  constructor() {}

  ngOnInit() {
    this.product = [
      { name: 'Milo', price: 10, category: 'Provision' },
      { name: 'Chicken', price: 20, category: 'Coldstore' },
    ];
  }
}
