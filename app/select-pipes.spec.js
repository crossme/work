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
var testing_1 = require('@angular/core/testing');
var ng2_select_1 = require('../../ng2-select');
var html = "";
describe('Component: ng2-select', function () {
    var fixture;
    var context;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestSelectComponent],
            imports: [ng2_select_1.SelectModule]
        });
        testing_1.TestBed.overrideComponent(TestSelectComponent, { set: { template: html } });
        fixture = testing_1.TestBed.createComponent(TestSelectComponent);
        context = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('fixture should not be null', function () {
        expect(fixture).not.toBeNull();
    });
});
var TestSelectComponent = (function () {
    function TestSelectComponent() {
    }
    TestSelectComponent = __decorate([
        core_1.Component({
            selector: 'select-test',
            template: '<ng-select></ng-select>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestSelectComponent);
    return TestSelectComponent;
}());
//# sourceMappingURL=select-pipes.spec.js.map