import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activador: boolean = true): string {


    if (activador) {

      let numCaracteres: number = value.length;

      let valueModificado: string = "";

      for (let i = 0; i < numCaracteres; i++) {
        valueModificado += "*";
      }

      return valueModificado;
    }
    return value;
  }

}
