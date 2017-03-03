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
var storeservice_1 = require('../../app/storeservice');
var RadarChartComponent = (function () {
    function RadarChartComponent() {
        var storeData = storeservice_1.StoreService.prototype.pieChartData;
        var labelsAr = [];
        var valueAr = [];
        var colorAr = [];
        storeData.forEach(function (e) {
            labelsAr.push(e.content);
            valueAr.push(e.BusyCounter);
            colorAr.push(e.color);
        });
        this.radarChartData = {
            labels: labelsAr,
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: valueAr
                },
            ]
        };
    }
    RadarChartComponent.prototype.ngOnInit = function () {
    };
    RadarChartComponent = __decorate([
        core_1.Component({
            selector: '<radarchart>',
            templateUrl: 'app/EnhancedView/radarchart.component.html',
            providers: [],
            styleUrls: ['app/resources/css/site.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RadarChartComponent);
    return RadarChartComponent;
}());
exports.RadarChartComponent = RadarChartComponent;
//# sourceMappingURL=radarchart.component.js.map