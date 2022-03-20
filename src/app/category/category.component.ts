import { Component, Injectable, OnInit } from '@angular/core';
// import { ConfirmationService } from 'primeng/api';
// import { MessageService } from 'primeng/api';

export interface Category {
  id?: number;
  name?: string;
  timestamps?: string;
  status?: number;
}
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: Category[] = [];
  _category!: Category;
  productDialog: boolean = false;
  submitted: boolean = false;
  constructor() {} // private messageService: MessageService // private confirmationService: ConfirmationService,

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

  deleteProduct(category: Category) {}
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
  }
}
