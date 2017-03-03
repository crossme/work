import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import {Location} from '@angular/common';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';

declare var BUILD_VERSION: string;

@Component({
	selector: 'my-app',
  template: `==

==
  <p-tabMenu [model]="items" [activeItem]="activeItem"></p-tabMenu>
  <router-outlet></router-outlet>
  `,
  providers: [CacheService]
})

export class AppComponent implements OnInit{

  items : any;
  activeItem : any;

  constructor(private location :Location, private _cacheService: CacheService) {}

public func() {



        //set global prefix as build version
        this._cacheService.setGlobalPrefix('1');

        //put some data to cache "forever"
        //returns true is data was cached successfully, otherwise - false
         let result: boolean = this._cacheService.set('key', ['some data']);
         console.log(result);
         let data: any ;
         data = this._cacheService.get('key');
         console.log(data);
         

    }

  ngOnInit() {

        this.items = [
             {label: 'Dashboard', icon: 'fa-book', routerLink: ['/dashboard']},
             {label: 'Table', icon: 'fa-bar-chart', routerLink: ['/table']},
        ];
         if(location.pathname === '/table'){
            this.activeItem = this.items[1];
         } else if(location.pathname === '/dashboard'){
            this.activeItem = this.items[0];
         } else if (location.pathname === '/') {
             this.activeItem = this.items[1];
         }
       this.func();

 }
}
