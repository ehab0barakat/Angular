import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit'
})
export class CreditPipe implements PipeTransform {

  transform(value:string): string {

    if (value.length == 16 ){

    let one = value.substring(0,4);
    let two = value.substring(4,8);
    let three = value.substring(8,12);
    let four = value.substring(12,16);
    var finall = one +"-"+ two +"-"+ three +"-"+  four;
    }else{
      finall = "card num is worng"
    }
    return finall;

  }

}
