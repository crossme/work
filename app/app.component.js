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
var userservice_1 = require('./users/userservice');
var PrimeUser = (function () {
    function PrimeUser(id, name, week1, week2, color) {
        this.id = id;
        this.name = name;
        this.week1 = week1;
        this.week2 = week2;
        this.color = color;
    }
    return PrimeUser;
}());
var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.user = new PrimeUser();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsersMedium().then(function (users) { return _this.users = users; });
        console.log(this.users);
    };
    AppComponent.prototype.showDialogToAdd = function () {
        this.newUser = true;
        this.user = new PrimeUser();
        this.displayDialog = true;
    };
    AppComponent.prototype.save = function () {
        if (this.newUser)
            this.users.push(this.user);
        else
            this.users[this.findSelectedUserIndex()] = this.user;
        this.user = null;
        this.displayDialog = false;
    };
    AppComponent.prototype.delete = function () {
        this.users.splice(this.findSelectedUserIndex(), 1);
        this.user = null;
        this.displayDialog = false;
    };
    AppComponent.prototype.onRowSelect = function (event) {
        this.newUser = false;
        this.user = this.cloneUser(event.data);
        this.displayDialog = true;
    };
    AppComponent.prototype.cloneUser = function (c) {
        var user = new PrimeUser();
        for (var prop in c) {
            user[prop] = c[prop];
        }
        return user;
    };
    AppComponent.prototype.findSelectedUserIndex = function () {
        return this.users.indexOf(this.selectedUser);
    };
    AppComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/app.component.html',
            selector: 'my-app'
        }), 
        __metadata('design:paramtypes', [userservice_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map