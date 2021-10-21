import { Pipe, PipeTransform } from '@angular/core';
import { Hereo } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(hereos:Hereo[],ordenarPor:string='nombre' ): Hereo[] {


    switch(ordenarPor) {
      case 'nombre':
        return hereos.sort(function (a, b) {
          if (a.nombre > b.nombre) {
            return 1;
          }
          if (a.nombre < b.nombre) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });    
        break;
      case 'vuela':
        return hereos.sort(function (a, b) {
          if (a.vuela > b.vuela) {
            return 1;
          }
          if (a.vuela < b.vuela) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        break;
        case 'color':
          return hereos.sort(function (a, b) {
            if (a.color > b.color) {
              return 1;
            }
            if (a.color < b.color) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
      
          break;
      default:
        return hereos
    }

    
  }

}
