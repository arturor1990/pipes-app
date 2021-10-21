import { Component } from '@angular/core';
import { Color, Hereo } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas:boolean=true;

  ordernarPor:string ='';


  
  heroes:Hereo[]=[
    {
      nombre:'Superman',
      vuela:true,
      color:Color.azul
    },
    {
      nombre:'Batman',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela:false,
      color:Color.verde
    },
    {
      nombre:'Reddevil',
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela:true,
      color:Color.verde
    },
]

  cambiarMayusculas(){
    // if(this.enMayusculas){
    //   this.enMayusculas=false;
    //   return;
    // }
    // this.enMayusculas=true;
    // return;
    this.enMayusculas=!this.enMayusculas;
  }

  cambiarOrden(valor:string){
    this.ordernarPor=valor;
  }

 

}
