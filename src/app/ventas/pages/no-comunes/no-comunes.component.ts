import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string="Arturo";
  genero:string="masculino";

  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  };

  //i18nPrural

  clientes:string[]=['Arturo','Pedro','Maria','Giovanna','Gustavo'];
  clientesMapa={
    '=0':'no tenemos ningún clientes esperando,',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.',
  };

  cambiarPersona(){
    if(this.nombre=='Arturo'){
        this.genero='femenino';
        this.nombre='Susana'
    }
    else{
      this.genero='masculino';
      this.nombre='Arturo';
    }
  }

  borrarCliente(){
    this.clientes.shift();
    console.log(this.clientes)
  }

  //KeyValuePipe

  persona={
    nombre:'Arturo',
    edad:31,
    direccion:'Caracas'
  };

  // JsonPipe

  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }

  ]

  //Async Pipe

  miObservable=interval(1000);

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Tenemos dato de la promesa')
    }, 3500);

  });


}
