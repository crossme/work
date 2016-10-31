import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import {Location} from '@angular/common';

@Component({
	selector: 'my-app',
  template: `
  <p-tabMenu [model]="items" [activeItem]="activeItem"></p-tabMenu>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent implements OnInit{

  constructor(private location :Location) { }

  ngOnInit() {

        this.items = [
             {label: 'Dashboard', icon: 'fa-book', routerLink: ['/dashboard']},
             {label: 'Table', icon: 'fa-bar-chart', routerLink: ['/table']},
        ];
         if(location.pathname=="/table"){
            this.activeItem = this.items[1];
         } else if(location.pathname=="/dashboard"){
            this.activeItem = this.items[0];
         } else {
             this.activeItem = this.items[0];
         }
        

 }
}
