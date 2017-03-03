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
var _ = require('underscore');
var DoughnutComponent = (function () {
    function DoughnutComponent() {
        var storeData = storeservice_1.StoreService.prototype.doughnutData;
        var labelsAr = [];
        var valueAr = [];
        var colorAr = [];
        var shuffleColorAr = [];
        storeData.forEach(function (e) {
            labelsAr.push(e.content);
            valueAr.push(e.BusyCounter);
            colorAr.push(e.color);
        });
        shuffleColorAr = _.shuffle(colorAr);
        for (var i = shuffleColorAr.length - 1; i >= 0; i--) {
            var hex = storeservice_1.StoreService.prototype.colourNameToHex(shuffleColorAr[i]);
            shuffleColorAr[i] = hex ? hex : '#000000';
        }
        this.doughnutData = {
            labels: labelsAr,
            datasets: [
                {
                    data: valueAr,
                    backgroundColor: colorAr,
                    hoverBackgroundColor: shuffleColorAr
                }]
        };
    }
    DoughnutComponent = __decorate([
        core_1.Component({
            selector: '<doughnut>',
            templateUrl: 'app/EnhancedView/doughnut.component.html',
            providers: [],
            styleUrls: ['app/resources/css/site.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DoughnutComponent);
    return DoughnutComponent;
}());
exports.DoughnutComponent = DoughnutComponent;
//# sourceMappingURL=doughnut.component.js.map