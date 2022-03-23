import { Component, OnInit } from '@angular/core';
export interface SaleRecord {
  date: string;
  item: string;
  product_id: number;
  price: number;
  quantity: number;
  total: number;
}
@Component({
  selector: 'app-sale-record',
  templateUrl: './sale-record.component.html',
  styleUrls: ['./sale-record.component.scss'],
})
export class SaleRecordComponent implements OnInit {
  nodes1: {
    option1: string;
    option2: string;
  }[] = [];
  saleRecord: SaleRecord[] = [];

  selectedNode: any;
  constructor() {}
  displayBasic: boolean = false;

  showBasicDialog() {
    this.displayBasic = true;
  }
  ngOnInit(): void {
    this.saleRecord = [
      {
        date: '12-03-2022',
        item: 'Milo',
        product_id: 1,
        price: 10,
        quantity: 5,
        total: 50,
      },
    ];
    this.nodes1 = [{ option1: 'On Credit', option2: 'Pay by cash' }];
  }
}
