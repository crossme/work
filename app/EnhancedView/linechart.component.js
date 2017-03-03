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
var LineChartComponent = (function () {
    function LineChartComponent() {
        var storeData = storeservice_1.StoreService.prototype.linechartData;
        var labelsAr = [];
        var valueAr = [];
        storeData.forEach(function (e) {
            labelsAr.push(e.content);
            valueAr.push(e.BusyCounter);
        });
        this.linechartData = {
            labels: labelsAr,
            datasets: [
                {
                    label: 'First Dataset',
                    data: valueAr,
                    fill: false,
                    borderColor: '#4bc0c0'
                },
            ]
        };
    }
    LineChartComponent.prototype.selectData = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Data Selected', 'detail': this.linechartData.datasets[event.element._datasetIndex].data[event.element._index] });
    };
    LineChartComponent.prototype.ngOnInit = function () {
    };
    LineChartComponent = __decorate([
        core_1.Component({
            selector: '<linechart>',
            templateUrl: 'app/EnhancedView/linechart.component.html',
            providers: [],
            styleUrls: ['app/resources/css/site.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LineChartComponent);
    return LineChartComponent;
}());
exports.LineChartComponent = LineChartComponent;
//# sourceMappingURL=linechart.component.js.map