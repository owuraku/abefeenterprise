import { ProductService } from './../service/product.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryDetails, ProductDetails } from './product.model';
import { CategoryService } from '../service/category.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  hideContent: number | undefined;

  product: ProductDetails[] = [];
  _product!: ProductDetails;

  displayBasic: boolean = false;
  editDialog = false;

  category: CategoryDetails[] = [];

  showAddProductDialog() {
    this.hideContent = 1;
    this.displayBasic = true;
  }

  showEditProductDialog(product: ProductDetails) {
    this._product = { ...product };
    this.productForm.patchValue(product);
    this.displayBasic = true;
    this.hideContent = 0;
  }

  productForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    sellingPrice: new FormControl(''),
    costPrice: new FormControl(''),
    currentStock: new FormControl(''),
    status: new FormControl(true),
  });

  columnDef = [
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'Selling Price', header: 'Selling Price' },
    { field: 'Cost Price', header: 'Cost Price' },
    { field: 'Current Stock', header: 'Current Stock' },
    { field: 'status', header: 'Active' },
  ];
  constructor(
    private productService: ProductService,
    private cdref: ChangeDetectorRef,
    private categoryService: CategoryService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.productService.getProduct().subscribe((res: any) => {
      this.product = [...res];
      this.cdref.detectChanges();
      console.log(res);
    });
    this.categoryService.getCategory().subscribe((result: any) => {
      this.category = [...result];
      console.log(this.category);
    });
  }
  addProduct() {
    const data = this.productForm.value;
    data.category = this.category[0].id;
    this.productService.addProduct(data).subscribe((res) =>
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Message Content',
      })
    );
  }

  saveEditProduct(id: string) {
    const data = {
      name: this.productForm.value.name,
      category: this.productForm.value.category.id,
      sellingPrice: this.productForm.value.sellingPrice,
      costPrice: this.productForm.value.costPrice,
      status: true,
    };
    this.productService.updateProduct(id, data).subscribe((res: any) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Message Content',
      });
    });
  }
}
