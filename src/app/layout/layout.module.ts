import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [CommonModule, RouterModule, MenubarModule, StyleClassModule],
})
export class LayoutModule {}
