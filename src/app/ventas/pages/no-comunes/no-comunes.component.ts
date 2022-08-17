import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {
  // i18nSelect
  public nombre: string = 'Juan';
  public genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPrural
  clientes: string[] = ['Maria','Jose','Camilo','Juliana'];

  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  //el simbolo # sirve para transformar el valor

  CambiarCliente() {
    this.nombre = 'Diana';
    this.genero = 'femenino';
  }

  BorrarCliente() {
    //EL POP sirve para ir sacando de a un elemento de un array
    this.clientes.pop();
  }
}
