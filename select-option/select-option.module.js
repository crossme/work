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
/**
* Necessary and sufficients imports for single or multi-select.
*/
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var _1 = require("../");
var forms_1 = require("@angular/forms");
var select_option_component_1 = require("./select-option.component");
var pipes_1 = require("../../pipes");
var shared_1 = require("../shared");
var angular2_perfect_scrollbar_1 = require("angular2-perfect-scrollbar");
var forms_2 = require("@angular/forms");
/**
* PerfectScrollbar Specific Settings.
*/
var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
/**
* Module for making a component of
* single or multi-select.
*/
var SelectOptionModule = (function () {
    /**
    *
    * Exported the entire module.
    */
    function SelectOptionModule() {
    }
    return SelectOptionModule;
}());
SelectOptionModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule, _1.WebBasicModule,
            forms_1.FormsModule, pipes_1.PipeModule, shared_1.SharedModule, forms_2.ReactiveFormsModule,
            angular2_perfect_scrollbar_1.PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)],
        declarations: [
            select_option_component_1.SelectComponent
        ],
        exports: [select_option_component_1.SelectComponent]
    }),
    __metadata("design:paramtypes", [])
], SelectOptionModule);
exports.SelectOptionModule = SelectOptionModule;
//# sourceMappingURL=select-option.module.js.map