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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
require('rxjs/add/operator/toPromise');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard.component');
var user_detail_component_1 = require('./user-detail.component');
var table_component_1 = require('./table.component');
var carservice_1 = require('./cars/carservice');
var userservice_1 = require('./users/userservice');
var router_1 = require('@angular/router');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, primeng_1.InputTextModule, primeng_1.DataTableModule, primeng_1.ButtonModule, primeng_1.DialogModule, http_1.HttpModule,
                primeng_2.TabMenuModule, primeng_2.MenuModule, primeng_3.InputSwitchModule, primeng_3.TooltipModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'dashboard',
                        component: dashboard_component_1.DashboardComponent
                    },
                    {
                        path: 'table',
                        component: table_component_1.TableComponent
                    },
                ])
            ],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, table_component_1.TableComponent, user_detail_component_1.UserDetailComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [carservice_1.CarService, userservice_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map