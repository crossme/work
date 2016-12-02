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
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.slides = [];
        for (var i = 0; i < 4; i++) {
            this.addSlide(i);
        }
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
    DashboardComponent.prototype.addSlide = function (newWidth) {
        //let newWidth = 600 + this.slides.length + 1;
        this.slides.push({
            image: newWidth + "-a.jpg",
            text: ['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4] + "\n        " + ['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.images = [];
        this.images.push({ source: 'app/1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: '/app/2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: '/app/3.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/resources/css/site.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map