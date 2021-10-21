import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'pipesApp';
  // nombre: string='arturo romero';
  // valor: number=1000;
  // obj={
  //   nombre:'Arturo'
  // }
  // mostrarNombre(){
  //   console.log(this.nombre,this.valor)
  //   console.log(this.obj)
  // }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
