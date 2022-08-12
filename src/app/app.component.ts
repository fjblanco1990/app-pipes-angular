import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-app';
  title_button: string  = 'Cambiar nombre PrimeNg';
  nombre: string  = 'FrAnCiScO Blanco';
  valor: number = 100000;
  obj = { 
    nombre: 'Francisco'
  }

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }

}
