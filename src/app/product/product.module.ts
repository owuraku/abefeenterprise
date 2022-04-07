import { ProductRoutes } from './product.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutes,
    CardModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
  ],
})
export class ProductModule {}
