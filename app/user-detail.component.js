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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var UserDetailComponent = (function () {
    function UserDetailComponent(route, location) {
        this.route = route;
        this.location = location;
        this.isRowEditable = true;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        this.weeks = [
            { 'id': 1, 'content': "week1 content", 'color': "Red" },
            { 'id': 2, 'content': "week2 content", 'color': "Blue" }
        ];
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'content', header: 'CONTENT' },
        ];
        this.slideMenuitems = [
            { label: 'Update', icon: 'fa-refresh', command: function () {
                    //this.update();
                } },
            { label: 'Barchart', icon: 'fa-close', routerLink: ['/barchart'], command: function () {
                    //this.delete();
                } },
            //{label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            { label: 'InnerMenu',
                items: [
                    { label: 'DoughNut', icon: 'fa-paint-brush', routerLink: ['/doughnut'] },
                    { label: 'LineChart', icon: 'fa-paint-brush', routerLink: ['/linechart'] },
                    { label: 'PolarAreaChart', icon: 'fa-paint-brush', routerLink: ['/polarareachart'] },
                    { label: 'PieChart', icon: 'fa-paint-brush', routerLink: ['/piechart'] },
                    { label: 'RadarChart', icon: 'fa-paint-brush', routerLink: ['/radarchart'] },
                ]
            }
        ];
        /*this.splitButtonitems = [
                {label: 'Update', icon: 'fa-refresh', command: () => {
                    //this.update();
                }},
                {label: 'Barchart', icon: 'fa-close',routerLink: ['/barchart'], command: () => {
                    //this.delete();
                }},
                //{label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
                {label: 'DoughNut', icon: 'fa-paint-brush', routerLink: ['/doughnut']},
                {label: 'LineChart', icon: 'fa-paint-brush', routerLink: ['/linechart']},
                {label: 'PolarAreaChart', icon: 'fa-paint-brush', routerLink: ['/polarareachart']},
                {label: 'PieChart', icon: 'fa-paint-brush', routerLink: ['/piechart']},
                {label: 'RadarChart', icon: 'fa-paint-brush', routerLink: ['/radarchart']},
            ];*/
    };
    ;
    UserDetailComponent.prototype.showDialog = function () {
        this.isdisplay = true;
    };
    UserDetailComponent.prototype.saveSplitButton = function () {
        console.log("split button clicked!");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserDetailComponent.prototype, "user", void 0);
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: '<user-detail>',
            templateUrl: 'app/user-detail.component.html',
            providers: [],
            styleUrls: ['app/resources/css/site.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map