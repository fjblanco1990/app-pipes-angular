import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
            title:'',
            label:'Pipes angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label:'Textos y fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label:'Numeros',
                icon: 'pi pi-dollar',
                routerLink: 'numeros'
              },
              {
                label:'No comunes',
                icon: 'pi pi-globe',
                routerLink: 'no-comunes'
              },
            ]
          },
          {
            title:'algo',
            label:'Pipes personalizados',
            icon: 'pi pi-cog',
          }
      ];
  }

}
