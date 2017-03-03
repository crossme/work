"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng2_cache_1 = require('ng2-cache/ng2-cache');
var AppComponent = (function () {
    function AppComponent(location, _cacheService) {
        this.location = location;
        this._cacheService = _cacheService;
    }
    AppComponent.prototype.func = function () {
        //set global prefix as build version
        this._cacheService.setGlobalPrefix('1');
        //put some data to cache "forever"
        //returns true is data was cached successfully, otherwise - false
        var result = this._cacheService.set('key', ['some data']);
        console.log(result);
        var data;
        data = this._cacheService.get('key');
        console.log(data);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Dashboard', icon: 'fa-book', routerLink: ['/dashboard'] },
            { label: 'Table', icon: 'fa-bar-chart', routerLink: ['/table'] },
        ];
        if (location.pathname === '/table') {
            this.activeItem = this.items[1];
        }
        else if (location.pathname === '/dashboard') {
            this.activeItem = this.items[0];
        }
        else if (location.pathname === '/') {
            this.activeItem = this.items[1];
        }
        this.func();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "==\n\n==\n  <p-tabMenu [model]=\"items\" [activeItem]=\"activeItem\"></p-tabMenu>\n  <router-outlet></router-outlet>\n  ",
            providers: [ng2_cache_1.CacheService]
        }), 
        __metadata('design:paramtypes', [common_1.Location, ng2_cache_1.CacheService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map