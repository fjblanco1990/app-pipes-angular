import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string  = 'francisco javier blanco';
  nombreUper: string  = 'francisco javier blanco';
  nombreCompleto: string  = 'frAnCISco JAviER blAnco';
  fecha: Date = new Date();
}
