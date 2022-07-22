import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Model/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.css']
})
export class SubProductComponent implements OnInit , OnChanges {



@Input() selected:number = 0 ;
@Output() onCardChange:EventEmitter<object> ;
@Output() onCardChangeWant:EventEmitter<number> ;



constructor(  public service:ProductsServiceService ,
              public router: Router ) {
              this.onCardChange = new EventEmitter<object>();
              this.onCardChangeWant = new EventEmitter<number>();
}




GetProductId(id:number){
  console.log(id)
  this.router.navigate(['products',id]);
}





newProducts:IProduct[] = this.service.productList.filter((el) => el.quantity > 0) ;


ngOnChanges(): void {


  if(this.selected != 0 ){
    this.newProducts = this.service.productList.filter((el)=> el.category_id == this.selected  && el.quantity > 0);
  }else{
    this.newProducts =this.service.productList.filter((el)=> el.quantity > 0 && el.quantity > 0)
  }};



  buyCondition:boolean = false ;
  buy:Date = new Date();

  changeCondition(){
    this.buyCondition = !this.buyCondition
  }


  decrese(val:IProduct , order:number , quantity:number){
    if(order<= quantity && order > 0){

      this.onCardChangeWant.emit(order);

      this.onCardChange.emit(val);
      
      val.quantity = val.quantity - order  ;
    }

}

  ngOnInit(): void {
  }

}
