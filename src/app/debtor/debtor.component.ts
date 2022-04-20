import { Component, OnInit } from '@angular/core';
export interface CustomerDebt {
  name: string;
  debt: number;
  lastPayment: string;
}

export interface PaymentDetails {
  date: string;
  item: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-debtor',
  templateUrl: './debtor.component.html',
  styleUrls: ['./debtor.component.scss'],
})
export class DebtorComponent implements OnInit {
  customerDebt: CustomerDebt[] = [];

  paymentDetails: PaymentDetails[] = [];
  paymentDetail: PaymentDetails | undefined;
  paymentDetailsDialog: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.customerDebt = [
      { name: 'Kingsley King', debt: 10, lastPayment: '12-10-2021' },
    ];
    this.paymentDetails = [
      { date: '10-08-2022', item: 'Milo', quantity: 5, price: 10 },
    ];
  }
  makePayment(paymentDetails: PaymentDetails) {
    this.paymentDetail = { ...paymentDetails };
    this.paymentDetailsDialog = true;
  }
}
