import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProComponent } from './add-pro/add-pro.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { SubProductComponent } from './Components/sub-product/sub-product.component';

const routes: Routes = [

  {path: "" , redirectTo:'/home' , pathMatch: 'full' },
  {path: "home" , component: ProductsComponent },
  {path: "products" , component: SubProductComponent },
  {path: "products/:id" , component: ProductDetailsComponent },
  {path: "addproduct" , component: AddProComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
