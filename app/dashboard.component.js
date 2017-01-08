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
var userservice_1 = require('./users/userservice');
var Observable_1 = require('rxjs/Observable');
var DashboardComponent = (function () {
    function DashboardComponent(router, location, userService) {
        this.router = router;
        this.location = location;
        this.userService = userService;
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.slides = [];
        this.items = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
            'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
            'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
            'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
            'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
            'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
            'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
            'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
            'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];
        this.value = ['Athens'];
        this._disabledV = '0';
        this.disabled = false;
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
    DashboardComponent.prototype.observableFun = function () {
        var obs = Observable_1.Observable.from(['1', 2, '3']);
        console.log('obsss', obs);
        obs.subscribe(function (x) { return console.log(x); });
        ;
        /*
            let observable$ = new Observable(observer =>{
              console.log('observable created', observer);
              //observer.error(new Error("FUCK"));
              setTimeout(()=>{
                observer.next(100);
        
              },1000);
        
            });
        
             observable$.subscribe(
              val =>{
                console.log(val);
              },
              err =>{
                console.log(err);
              } ,
              complete =>{
                console.log('COMPLETED');
              }
            );
            let subscription2 = observable$.subscribe(
              val1 =>{
                console.log(val1);
              },
              err1 =>{
                console.log(err1);
              } ,
              complete1 =>{
                console.log('COMPLETED1');
              }
            );
        */
    };
    DashboardComponent.prototype.GetUSERSSS = function () {
        var _this = this;
        this.userService.getUsersMedium().subscribe(function (data) {
            _this.myItems = data;
            console.log("kkkk");
        }, function (err) { return console.error(err); }, function () { return console.log('Random Quote Complete'); });
        ;
    };
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
    Object.defineProperty(DashboardComponent.prototype, "disabledV", {
        get: function () {
            return this._disabledV;
        },
        set: function (value) {
            this._disabledV = value;
            this.disabled = this._disabledV === '1';
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    DashboardComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    DashboardComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    DashboardComponent.prototype.itemsToString = function (value) {
        if (value === void 0) { value = []; }
        return value
            .map(function (item) {
            return item.text;
        }).join(',');
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/resources/css/site.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, userservice_1.UserService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map