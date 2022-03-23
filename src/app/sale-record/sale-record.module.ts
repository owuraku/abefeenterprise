import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRecordRoutingModule } from './sale-record-routing.module';
import { SaleRecordComponent } from './sale-record.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SaleRecordComponent],
  imports: [
    CommonModule,
    SaleRecordRoutingModule,
    CardModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TreeSelectModule,
    FormsModule,
  ],
})
export class SaleRecordModule {}
