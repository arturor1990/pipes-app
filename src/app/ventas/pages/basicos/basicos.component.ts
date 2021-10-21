import { Component } from '@angular/core';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string ='Arturo';
  nombreUpper:string ='ARTURO';
  nombreCompleto:string ='aRtuRo roMero';


  fecha:Date=new Date();//fecha actual

}
