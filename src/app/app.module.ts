import { ProductModule } from './product/product.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> feature/inventoryUI
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
<<<<<<< HEAD
    ProductModule,
    BrowserAnimationsModule,
    HttpClientModule,
=======
    BrowserAnimationsModule,
>>>>>>> feature/inventoryUI
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
