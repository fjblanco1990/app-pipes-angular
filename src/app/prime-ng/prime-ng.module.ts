import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { FieldsetModule  } from 'primeng/fieldset';
@NgModule({
  declarations: [],
  imports: [

  CommonModule,
  ],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    ImageModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
