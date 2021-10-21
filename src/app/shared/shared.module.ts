import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManuComponent } from './manu/manu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    ManuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    ManuComponent
  ]
})
export class SharedModule { }
