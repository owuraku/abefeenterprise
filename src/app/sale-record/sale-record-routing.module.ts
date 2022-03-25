import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleRecordComponent } from './sale-record.component';

const routes: Routes = [{ path: '', component: SaleRecordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRecordRoutingModule { }
