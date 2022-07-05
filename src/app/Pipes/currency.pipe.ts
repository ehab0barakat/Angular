import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ustoeg'
})
export class CurrencyPipe implements PipeTransform {

  transform(value:number): number {
    return value * 18 ;
  }

}
