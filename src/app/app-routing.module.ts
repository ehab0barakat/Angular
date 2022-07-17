import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { SubProductComponent } from './Components/sub-product/sub-product.component';

const routes: Routes = [

  {path: "" , redirectTo:'/home' , pathMatch: 'full' },
  {path: "home" , component: ProductsComponent },
  {path: "products" , component: SubProductComponent },
  {path: "products:pid" , component: SubProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
