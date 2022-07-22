import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { DecreseDirective } from './Directives/decrese.directive';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from './Pipes/currency.pipe';
import { IdCardPipe } from './Pipes/id-card.pipe';
import { CreditPipe } from './Pipes/credit.pipe';
import { SubProductComponent } from './Components/sub-product/sub-product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddProComponent } from './add-pro/add-pro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    DecreseDirective,
    CurrencyPipe,
    IdCardPipe,
    CreditPipe,
    SubProductComponent,
    ProductDetailsComponent,
    AddProComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
