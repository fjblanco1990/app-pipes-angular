import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipes-app';
  title_button: string  = 'Cambiar nombre PrimeNg';
  nombre: string  = 'FrAnCiScO Blanco';
  valor: number = 100000;
  obj = { 
    nombre: 'Francisco'
  }

  constructor(private primengConfig: PrimeNGConfig) {
    
    
  }

  ngOnInit() {
    //sirve para dar la animacion com burbuja blanca al hacer clcik en las opciones se hace en app para que la aplicacio la tome global
    this.primengConfig.ripple = true;
  }

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }

}
