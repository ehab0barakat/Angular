import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Model/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

prodid: number | undefined;

constructor(private service:ProductsServiceService ,
            private router : Router,
            private activatedRoute : ActivatedRoute) {
            }


ngOnInit(): void {
}

prod = this.activatedRoute.paramMap.subscribe( param =>{
  this.prodid= Number( param.get("id") );
})

prodata:IProduct[] = this.service.productList.filter( p => p.id == Number( this.prodid) );


next(id:number) {

  let index = this.service.productList.map( p => p.id ).indexOf(id);

  if(index + 1 == this.service.productList.length - 1 ){
    index = 0 ;
  }else{
     index = this.service.productList.map( p => p.id ).indexOf(id)
  }
  this.prodata= this.service.productList.filter((x , p) => p == index + 1 );
}


back(id:number) {

  let index = this.service.productList.map( p => p.id ).indexOf(id)
  if(index - 1 == 0 ){
    index = this.service.productList.length - 1 ;
  }else{
    let index = this.service.productList.map( p => p.id ).indexOf(id)
  }
  this.prodata= this.service.productList.filter((x , p) => p == index - 1 );

}


}
