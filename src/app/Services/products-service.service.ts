import { Injectable } from '@angular/core';
import { IProduct } from '../Model/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() { }

  productList:IProduct[] =[{id : 1 ,
    name : 'suzuki car' ,
    quantity : 3 ,
    price : 1000 ,
    img : "../../../assets/apple-iphone-13-pro-256gb-5g-sierra-blue_1.webp" ,
    category_id : 3},

    {id : 3 ,
      name : 'bmw car' ,
      quantity : 0 ,
      price : 9000 ,
      img : "../../../assets/apple-iphone-13-pro-256gb-5g-sierra-blue_1.webp" ,
      category_id : 3},

    {id : 9 ,
      name : 'mobile' ,
      quantity : 5 ,
      price : 100 ,
      img : "../../../assets/apple-iphone-13-pro-256gb-5g-sierra-blue_1.webp" ,
      category_id : 1},

    {id : 11 ,
      name : 't shirt xl' ,
      quantity : 2 ,
      price : 50 ,
      img : "../../../assets/apple-iphone-13-pro-256gb-5g-sierra-blue_1.webp" ,
      category_id : 2},

      {id : 35 ,
      name : 't shirt sm' ,
      quantity : 1 ,
      price : 50 ,
      img : "../../../assets/apple-iphone-13-pro-256gb-5g-sierra-blue_1.webp" ,
      category_id : 2},

    {id : 17 ,
      name : 'wooden door' ,
      quantity : 4 ,
      price : 100 ,
      img : "../../../assets/apple-iphone-13-pro-256gb-5g-sierra-blue_1.webp" ,
      category_id : 4},

    {id : 140 ,
      name : 'golden door' ,
      quantity : 0 ,
      price : 100 ,
      img : "../../../assets/apple-iphone-13-pro-256gb-5g-sierra-blue_1.webp" ,
      category_id : 4},

    {id : 170 ,
      name : 'diamond door' ,
      quantity : 1 ,
      price : 100 ,
      img : "../../../assets/apple-iphone-13-pro-256gb-5g-sierra-blue_1.webp" ,
      category_id : 4},

    {id : 220 ,
      name : 'carrots' ,
      quantity : 1 ,
      price : 15 ,
      img : "../../../assets/apple-iphone-13-pro-256gb-5g-sierra-blue_1.webp" ,
      category_id : 5},

    {id : 225 ,
      name : 'tomatos' ,
      quantity : 1 ,
      price : 15 ,
      img : "../../../assets/apple-iphone-13-pro-256gb-5g-sierra-blue_1.webp" ,
      category_id : 5},

      {id : 450 ,
      name : 'beans' ,
      quantity : 1 ,
      price : 15 ,
      img : "../../../assets/apple-iphone-13-pro-256gb-5g-sierra-blue_1.webp" ,
      category_id : 6},
  ]







}
