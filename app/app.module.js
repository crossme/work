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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var userservice_1 = require('./users/userservice');
var router_1 = require('@angular/router');
var doughnut_component_1 = require('../app/EnhancedView/doughnut.component');
var barchart_component_1 = require('../app/EnhancedView/barchart.component');
var linechart_component_1 = require('../app/EnhancedView/linechart.component');
var polarareachart_component_1 = require('../app/EnhancedView/polarareachart.component');
var piechart_component_1 = require('../app/EnhancedView/piechart.component');
var radarchart_component_1 = require('../app/EnhancedView/radarchart.component');
var select_1 = require('../app/select');
var off_click_1 = require('../app/off-click');
var select_pipes_1 = require('../app/select-pipes');
var primeng_1 = require('primeng/primeng');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, primeng_1.InputTextModule, primeng_1.DataTableModule, primeng_1.ButtonModule, primeng_1.DialogModule, http_1.HttpModule,
                primeng_1.TabMenuModule, primeng_1.MenuModule, primeng_1.InputSwitchModule, primeng_1.TooltipModule, primeng_1.ProgressBarModule, primeng_1.GalleriaModule, ng2_bootstrap_1.Ng2BootstrapModule,
                ng2_bootstrap_1.AlertModule, ng2_bootstrap_1.CarouselModule, primeng_1.SplitButtonModule, primeng_1.ChartModule, primeng_1.MessagesModule, primeng_1.SlideMenuModule,
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
                    {
                        path: 'doughnut',
                        component: doughnut_component_1.DoughnutComponent
                    },
                    {
                        path: 'barchart',
                        component: barchart_component_1.BarChartComponent
                    },
                    {
                        path: 'linechart',
                        component: linechart_component_1.LineChartComponent
                    },
                    {
                        path: 'polarareachart',
                        component: polarareachart_component_1.PolarAreaChartComponent
                    },
                    {
                        path: 'piechart',
                        component: piechart_component_1.PieChartComponent
                    },
                    {
                        path: 'radarchart',
                        component: radarchart_component_1.RadarChartComponent
                    },
                ])
            ],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, table_component_1.TableComponent, user_detail_component_1.UserDetailComponent, doughnut_component_1.DoughnutComponent, barchart_component_1.BarChartComponent,
                linechart_component_1.LineChartComponent, polarareachart_component_1.PolarAreaChartComponent, piechart_component_1.PieChartComponent, radarchart_component_1.RadarChartComponent, select_1.SelectComponent, off_click_1.OffClickDirective, select_pipes_1.HighlightPipe,
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [userservice_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map