import { InventoryService } from './../service/inventory.service';
import { ProductService } from './../service/product.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventoryDetails } from './inventory.model';
import { MessageService } from 'primeng/api';
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
  updateStockForm = new FormGroup({
    description: new FormControl('', Validators.required),
    updateNumber: new FormControl('', Validators.required),
  });

  inventoryArray: InventoryDetails[] = [];
  inventory!: InventoryDetails;

  // stockDetails: StockDetails[] = [];

  stockHistoy: StockDetails[] = [];
  stockDetail!: StockDetails;
  productDetailsDialog: boolean = false;
  stockDetailsDialog: boolean = false;
  id: string = '';
  constructor(
    private productService: ProductService,
    private cdref: ChangeDetectorRef,
    private categoryService: CategoryService,
    private inventoryService: InventoryService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((res: any) => {
      this.inventoryArray = [...res];
      this.cdref.detectChanges();
      console.log(res);
      this.viewStock;
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.viewStock;
  }
  viewStock(id: any) {
    this.stockDetail = { ...id };
    this.stockDetailsDialog = true;
    this.inventoryService.productHistory(id).subscribe((res: any) => {
      this.stockHistoy = [...res];
      this.cdref.detectChanges();
      console.log(res);
    });
  }

  updateStock(_inventory: InventoryDetails) {
    this.inventory = { ..._inventory };
    this.productDetailsDialog = true;
  }

  addProduct(id: string) {
    this.inventoryService
      .addStock(id, this.updateStockForm.value)
      .subscribe((data) =>
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Message Content',
        })
      );
  }
  deductProduct(id: string) {
    this.inventoryService
      .deductStock(id, this.updateStockForm.value)
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Message Content',
        });
      });
  }
}
