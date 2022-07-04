import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Model/iproduct';
import { ICategory } from 'src/app/Model/icategory';
import { ClassStore } from 'src/app/Model/class-store';
import { DiscountOffers } from 'src/app/Model/discount-offers';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:IProduct[] =[{id : 1 ,
                        name : 'suzuki car' ,
                        quantity : 3 ,
                        price : 1000 ,
                        // img : "../../../assets/(1).jpg" ,
                        category_id : 3},

                        {id : 3 ,
                          name : 'bmw car' ,
                          quantity : 1 ,
                          price : 9000 ,
                          // img : "../../../assets/(1).jpg" ,
                          category_id : 3},

                        {id : 9 ,
                          name : 'mobile' ,
                          quantity : 5 ,
                          price : 100 ,
                          // img : "../../../assets/(1).jpg" ,
                          category_id : 1},

                        {id : 11 ,
                          name : 't shirt xl' ,
                          quantity : 2 ,
                          price : 50 ,
                          // img : "../../../assets/(1).jpg" ,
                          category_id : 2},

                          {id : 35 ,
                          name : 't shirt sm' ,
                          quantity : 1 ,
                          price : 50 ,
                          // img : "../../../assets/(1).jpg" ,
                          category_id : 2},

                        {id : 17 ,
                          name : 'wooden door' ,
                          quantity : 4 ,
                          price : 100 ,
                          // img : "../../../assets/(1).jpg" ,
                          category_id : 4},

                        {id : 140 ,
                          name : 'golden door' ,
                          quantity : 1 ,
                          price : 100 ,
                          // img : "../../../assets/(1).jpg" ,
                          category_id : 4},

                        {id : 170 ,
                          name : 'diamond door' ,
                          quantity : 1 ,
                          price : 100 ,
                          // img : "../../../assets/(1).jpg" ,
                          category_id : 4},

                        {id : 220 ,
                          name : 'carrots' ,
                          quantity : 1 ,
                          price : 15 ,
                          // img : "../../../assets/(1).jpg" ,
                          category_id : 5},

                        {id : 225 ,
                          name : 'tomatos' ,
                          quantity : 1 ,
                          price : 15 ,
                          // img : "../../../assets/(1).jpg" ,
                          category_id : 5},

                          {id : 450 ,
                          name : 'beans' ,
                          quantity : 1 ,
                          price : 15 ,
                          // img : "../../../assets/(1).jpg" ,
                          category_id : 6},
                      ]

  categorys:ICategory[] = [{id : 1 , name : 'electronics'},
                           {id : 2 , name : 'clothes'},
                           {id : 3 , name : 'cars'},
                           {id : 4 , name : 'doors'},
                           {id : 5 , name : 'grocery'},
                           {id : 6 , name : 'canned food'},]



  class_store:ClassStore ;

  constructor() {
    this.class_store = new ClassStore( "book shop" , ["book one" , "book two" , "book three" , "book four"] , "../../../assets/l-2.png")
  }

  ClientName:string = "ehab"

imgShow:boolean = true
  changeCard() {
    this.imgShow = !this.imgShow
  }



  ngOnInit(): void {
  }

}
