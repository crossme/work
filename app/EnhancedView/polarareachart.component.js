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
var PolarAreaChartComponent = (function () {
    function PolarAreaChartComponent() {
        var storeData = storeservice_1.StoreService.prototype.barChartData;
        var labelsAr = [];
        var valueAr = [];
        var colorAr = [];
        storeData.forEach(function (e) {
            labelsAr.push(e.content);
            valueAr.push(e.BusyCounter);
        });
        this.polarAreaChartData = {
            datasets: [{
                    data: valueAr,
                    backgroundColor: colorAr,
                    label: 'My dataset'
                }],
            labels: labelsAr
        };
    }
    PolarAreaChartComponent.prototype.ngOnInit = function () {
    };
    PolarAreaChartComponent = __decorate([
        core_1.Component({
            selector: '<polarareachart>',
            templateUrl: 'app/EnhancedView/polarareachart.component.html',
            providers: [],
            styleUrls: ['app/resources/css/site.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PolarAreaChartComponent);
    return PolarAreaChartComponent;
}());
exports.PolarAreaChartComponent = PolarAreaChartComponent;
//# sourceMappingURL=polarareachart.component.js.map