import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idCard'
})
export class IdCardPipe implements PipeTransform {

  transform(value:string): string {


      let ye = value.substring(0,1) == "2" ? "19" : "20"
      let ar = value.substring(1,3)
      let year = ye+ar
      let month =value.substring(3,5)
      let day = value.substring(5,7)
      var date = day + "-" + month + "-" + year

    return date

  }
}

