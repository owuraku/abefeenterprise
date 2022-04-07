import {
  ChangeDetectorRef,
  Component,
  Injectable,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoryService } from './../service/category.service';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {
  categoryArray: Category[] = [];
  category: Category[] = [];
  _category!: Category;
  productDialog: boolean = false;
  submitted: boolean = false;

  columnDef = [
    { field: 'name', header: 'Name' },
    { field: 'status', header: 'Active' },
  ];
  constructor(
    private categoryService: CategoryService,
    private cdref: ChangeDetectorRef
  ) {}

  name = new FormControl('');
  ngOnInit(): void {
    // this.category = [
    //   { id: 1, name: 'ColdStore', timestamps: '10-12-2020', status: 1 },
    //   { id: 2, name: 'Provision', timestamps: '16-12-2020', status: 0 },
    // ];

    this.categoryService.getCategory().subscribe((result: any) => {
      this.categoryArray = [...result];
      this.cdref.detectChanges();
    });
  }

  addCategory() {
    const name = this.name.value;
    const data = {
      name: this.name.value,
    };
    this.categoryService.addCategory(data).subscribe((category) => {
      console.log(category);
    });
  }

  editCategory(id: any) {
    this._category = { ...id };
    this.productDialog = true;
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe();
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveEdittedCategory(id: any) {
    const data: Category = {
      name: this._category.name,
      status: true,
    };
    this.categoryService.editCategory(id, data).subscribe();
    this.submitted = true;
  }
}
