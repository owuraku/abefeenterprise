import { Component, Injectable, OnInit } from '@angular/core';
// import { ConfirmationService } from 'primeng/api';
// import { MessageService } from 'primeng/api';

export interface Category {
  id: number;
  name: string;
  timestamps: string;
  status: number;
}
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: Category[] = [];
  _category!: Category;
  productName = ['Provision', 'ColdStore'];
  productDialog: boolean | undefined;

  constructor() // private confirmationService: ConfirmationService,
  // private messageService: MessageService
  {}

  ngOnInit(): void {
    this.category = [
      { id: 1, name: 'ColdStore', timestamps: '10-12-2020', status: 1 },
      { id: 2, name: 'Provision', timestamps: '16-12-2020', status: 0 },
    ];
  }
  editProduct(category: any) {
    this._category = { ...category };
    this.productDialog = true;
  }

  deleteProduct(category: Category) {
    // this.confirmationService.confirm({
    //   message: 'Are you sure you want to delete ' + category.name + '?',
    //   header: 'Confirm',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.category = this.category.filter((val) => val.id !== category.id);
    //     // this._category = {};
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Successful',
    //       detail: 'Category Deleted',
    //       life: 3000,
    //     });
    //   },
    // });
  }
}
