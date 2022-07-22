import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { IProduct } from 'src/app/Model/iproduct';


@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

  constructor(public service:ProductsServiceService) { }

  id:number = 0 ;
  catId:number = 0
  quantity:number = 0
  price:number = 0
  name:string = ""
  image:string = ""

  product:IProduct = { id : this.id ,
    name : this.name ,
    quantity : this.quantity ,
    price : this.price ,
    img :this.image,
    category_id : this.catId}


    add(id:number , name:string , catId:number , price:number , quantity:number, image:string ) {

    this.product = { id : id ,
      name : name ,
      quantity : quantity ,
      price : price ,
      img :image,
      category_id : catId}


    this.service.productList.push(this.product)
  }



  ngOnInit(): void {
  }






}
