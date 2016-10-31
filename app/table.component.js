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
var common_1 = require('@angular/common');
var PrimeUser = (function () {
    function PrimeUser(id, name, week1, week2, color, location) {
        this.id = id;
        this.name = name;
        this.week1 = week1;
        this.week2 = week2;
        this.color = color;
        this.location = location;
    }
    return PrimeUser;
}());
var TableComponent = (function () {
    function TableComponent(userService, location) {
        this.userService = userService;
        this.location = location;
        this.user = new PrimeUser();
        this.isRowEditable = false;
        this.progressBarvalue = 0;
    }
    TableComponent.prototype.ngOnInit = function () {
        //this.userService.getUsersMedium().then(users => this.users = users);
        //console.log("users", this.users);
        console.log("location table", location);
        console.log("users", this.users);
        this.users =
            [
                {
                    "id": "1",
                    "name": "Mohit",
                },
                {
                    "id": "2",
                    "name": "Rohit",
                },
                {
                    "id": "3",
                    "name": "Rohan",
                },
                {
                    "id": "4",
                    "name": "USer",
                },
            ];
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'NAME' },
        ];
    };
    TableComponent.prototype.showDialogToAdd = function () {
        this.newUser = true;
        this.user = new PrimeUser();
        this.displayDialog = true;
    };
    TableComponent.prototype.save = function () {
        if (this.newUser)
            this.users.push(this.user);
        else
            this.users[this.findSelectedUserIndex()] = this.user;
        this.user = null;
        this.displayDialog = false;
    };
    TableComponent.prototype.delete = function () {
        this.users.splice(this.findSelectedUserIndex(), 1);
        this.user = null;
        this.displayDialog = false;
    };
    TableComponent.prototype.onRowSelect = function (event) {
        this.newUser = false;
        this.user = this.cloneUser(event.data);
        this.displayDialog = true;
    };
    TableComponent.prototype.cloneUser = function (c) {
        var user = new PrimeUser();
        for (var prop in c) {
            user[prop] = c[prop];
        }
        return user;
    };
    TableComponent.prototype.onRowSelect = function (event) {
        var _this = this;
        console.log("Row selected!", this.progressBarvalue);
        this.progressBarvalue = 0;
        this.interval = setInterval(function () {
            if (_this.progressBarvalue < 90) {
                _this.progressBarvalue = _this.progressBarvalue + Math.floor(Math.random() * 20) + 1;
            }
            else {
                _this.progressBarvalue = _this.progressBarvalue + Math.floor(Math.random() * 5) + 1;
            }
            if (_this.progressBarvalue >= 100) {
                _this.progressBarvalue = 100;
                clearInterval(_this.interval);
            }
        }, 500);
    };
    TableComponent.prototype.onRowUnselect = function (event) {
        console.log("unsel", event);
        this.progressBarvalue = 0;
        clearInterval(this.interval);
    };
    TableComponent.prototype.findSelectedUserIndex = function () {
        return this.users.indexOf(this.selectedUser);
    };
    TableComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/table.component.html',
            selector: 'table'
        }), 
        __metadata('design:paramtypes', [userservice_1.UserService, common_1.Location])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map