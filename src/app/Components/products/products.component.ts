import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Model/icategory';
import { ClassStore } from 'src/app/Model/class-store';
import { IProduct } from 'src/app/Model/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnChanges {




  class_store:ClassStore ;

  categorys:ICategory[] = this.service.categorys ;


  constructor(public service:ProductsServiceService ,public router: Router) {
    
    this.class_store = new ClassStore( "book shop" , ["book one" , "book two" , "book three" , "book four"] , "../../../assets/l-2.png")
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ClientName:string = "ehab"
  imgShow:boolean = true
  changeCard() {
    this.imgShow = !this.imgShow
  };


  selectedCat:number = 0 ;


  cardDataArr:IProduct[] = [];

  finallTotPrice:number = 0

  order:number = 1

  onCardChangeWant(value:number){
    this.order = value ;
  }

  onCardChange(value:any){
    value.totPrice  = this.order * value.price ;
    this.finallTotPrice += value.totPrice
    this.cardDataArr.push(value);
  }


  idCard:string = "29909011509345"

  Card:string = "1234123412341234"


  ngOnInit(): void {
  }

}

