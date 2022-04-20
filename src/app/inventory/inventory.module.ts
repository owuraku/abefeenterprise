import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    CardModule,
    DialogModule,
    ButtonModule,
    TableModule,
    FormsModule,
    InputTextModule,
  ],
})
export class InventoryModule {}
