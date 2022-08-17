import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el locale de la app
import localES from '@angular/common/locales/es';
import localESCO from '@angular/common/locales/es-CO';
import localFRCO from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localES);
registerLocaleData(localESCO);
registerLocaleData(localFRCO);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //sirve para que los components de primeNg tengan sus animaciones
    BrowserAnimationsModule,
    SharedModule,
    VentasModule,
    AppRouterModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
