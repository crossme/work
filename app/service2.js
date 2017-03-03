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
var index_1 = require('angular2-cache/index');
var Service = (function () {
    function Service() {
    }
    // The global cache key for the result of "getExpirationDate()" contains product id and uses it automatically
    Service.prototype.getExpirationDateByProduct = function (product) {
        return this.expiration
            ? new Date(this.expiration)
            : null;
    };
    Service.prototype.isExpiredByProduct = function (product) {
        return this.getExpirationDateByProduct(product) !== null // The first invoke - the code of <getExpirationDate> is executed
            && this.getExpirationDateByProduct(product) > new Date('12/12/2019'); // The second invoke - the code of <getExpirationDate> is NOT executed, and the result is taken from the cache     
    };
    __decorate([
        // Expiration date of the service ("Sun Jul 30 2017 03:00:00 GMT+0300 (Russia TZ 2 Standard Time)", ...)
        index_1.ZoneCached(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Product]), 
        __metadata('design:returntype', Date)
    ], Service.prototype, "getExpirationDateByProduct", null);
    return Service;
}());
exports.Service = Service;
var Product = (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @override
     */
    Product.prototype.toString = function () {
        // It's very important to override the toString() because the engine uses the global cache key for 
        // identifying the product instance
        return index_1.CacheKeyBuilder.make()
            .appendObjectName(this) // Don't pass the "this" parameter to "append" method into "toString" code section!
            .append(this.getId())
            .build(); // The composite key: entity type + entity Id
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=service2.js.map