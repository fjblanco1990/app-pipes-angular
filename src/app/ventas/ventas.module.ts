import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NnumerosComponent } from './pages/nnumeros/nnumeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdernarComponent } from './pages/ordernar/ordernar.component';




@NgModule({
  declarations: [
    NnumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdernarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NnumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdernarComponent
  ]
})
export class VentasModule { }
