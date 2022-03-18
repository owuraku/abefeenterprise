import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
// import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';

import { SplitButtonModule } from 'primeng/splitbutton';
@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    CardModule,
    TableModule,
    // MessageService,
    InputTextModule,
    SplitButtonModule,
  ],
  // providers: [{ provide: MessageService }],
})
export class CategoryModule {}
