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
var router_1 = require('@angular/router');
var DashboardComponent = (function () {
    function DashboardComponent(router, location) {
        this.router = router;
        this.location = location;
        setTimeout(function () {
            // run jQuery stuff here
            function ticker() {
                $('#ticker li:first').slideUp(function () {
                    $(this).appendTo($('#ticker')).slideDown();
                });
            }
            setInterval(function () { ticker(); }, 5000);
        }, 4000);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //console.log("location dash ", location.path;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: "\n    <br />\n    <h1>DASHBOARD Comp</h1>\n    <div class=\"ticker\">\n    <h3>Latest News</h3>\n    <ul id=\"ticker\">\n        <li>11Dummy data is benign information that does not contain any useful data, but serves to reserve spac...</li>\n        <li>22For testing, dummy data can also be used as stubs or pad to avoid software testing iss...</li>\n        <li>33In operational use, dummy data may be transmitted for OPSEC purposes.</li>\n        <li>44Dummy data must be rigorously evaluated and documented to ensure that it does no...</li>\n        <li>555The topic of this article may not meet Wikipedia's general notability guideline.</li>\n    </ul>\n</div>\n\n    ",
            styleUrls: ['app/resources/css/site.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map