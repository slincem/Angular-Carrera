import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[], tam:number): string {

    let noimage = "assets/img/noimage.png";

    if(!value){
      return noimage;

    }

    if(tam == 3){
        return (value.length > 0) ? value[2].url : noimage;
    }
    return (value.length > 0) ? value[1].url : noimage;
  }

}
