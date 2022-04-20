import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebtorRoutingModule } from './debtor-routing.module';
import { DebtorComponent } from './debtor.component';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [DebtorComponent],
  imports: [
    CommonModule,
    DebtorRoutingModule,
    CardModule,
    DialogModule,
    ButtonModule,
    TableModule,
    FormsModule,
    InputTextModule,
  ],
})
export class DebtorModule {}
