"use strict";
var testing_1 = require("@angular/core/testing");
var select_option_component_1 = require("./select-option.component");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var _1 = require("../");
var forms_2 = require("@angular/forms");
var pipes_1 = require("../../pipes");
var shared_1 = require("../shared");
var angular2_perfect_scrollbar_1 = require("angular2-perfect-scrollbar");
var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var compInstance;
var fixture;
var el;
fdescribe('Component: SelectComponent', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [platform_browser_1.BrowserModule, common_1.CommonModule, _1.WebBasicModule,
                forms_2.FormsModule, pipes_1.PipeModule, shared_1.SharedModule, forms_1.ReactiveFormsModule,
                angular2_perfect_scrollbar_1.PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)],
            declarations: [select_option_component_1.SelectComponent]
        });
        fixture = testing_1.TestBed.createComponent(select_option_component_1.SelectComponent);
        compInstance = fixture.componentInstance;
    });
    it('Should test navigation by arrow keys.', function () {
        var item1 = { "id": 66, "display": "Cab", "value": "Cab", "text": "item1" };
        var item2 = { "id": 67, "display": "Amsterdam", "value": "Amsterdam", "text": "item2" };
        var item3 = { "id": 69, "display": "Brussels", "value": "Brussels", "text": "item3" };
        var item4 = { "id": 71, "display": "MohitS", "text": "MohitS",
            "value": { "id": 1, "name": "Mohit", "type": "USER", "text": "MohitS" } };
        compInstance.options.push(item1);
        compInstance.options.push(item2);
        compInstance.options.push(item3);
        compInstance.options.push(item4);
        compInstance.activeOption = item2;
        expect(compInstance.options.length).toEqual(4);
        compInstance.navigation(40); // 40 = Down Arror key.
        expect(compInstance.activeOption).toBeDefined();
        expect(compInstance.activeOption).toEqual(item3);
        compInstance.navigation(38); // 38 = Up arrow key.
        expect(compInstance.activeOption).toEqual(item2);
        compInstance.navigation(38); // 38 = Up arrow key.
        expect(compInstance.activeOption).toEqual(item1);
        compInstance.navigation(38); // 38 = Up arrow key.
        expect(compInstance.activeOption).toEqual(item4);
    });
    it('Should test getSingleSelected function.', function () {
        var item1 = { "id": 66, "display": "Cab", "value": "Cab", "text": "item1" };
        var item2 = { "id": 67, "display": "Amsterdam", "value": "Amsterdam", "text": "item2" };
        var item3 = { "id": 69, "display": "Brussels", "value": "Brussels", "text": "item3" };
        var item4 = { "id": 71, "display": "MohitS", "text": "MohitS",
            "value": { "id": 1, "name": "Mohit", "type": "USER", "text": "MohitS" } };
        expect(compInstance.getSingleSelected(item1)).toEqual('Cab');
        expect(compInstance.getSingleSelected(item2)).toEqual('Amsterdam');
        expect(compInstance.getSingleSelected(item3)).toEqual('Brussels');
        compInstance.key = 'text';
        expect(compInstance.getSingleSelected(item4)).toEqual('MohitS');
    });
    it('Should test getSelectedItems function.', function () {
        var item1 = { "id": 66, "display": "Cab", "value": "Cab", "text": "item1" };
        var item2 = { "id": 67, "display": "Amsterdam", "value": "Amsterdam", "text": "item2" };
        var item3 = { "id": 69, "display": "Brussels", "value": "Brussels", "text": "item3" };
        var item4 = { "id": 71, "display": "MohitS", "text": "MohitS",
            "value": { "id": 1, "name": "Mohit", "type": "USER", "text": "MohitS" } };
        var items = [];
        items.push(item1);
        items.push(item2);
        items.push(item3);
        items.push(item4);
        var values = compInstance.getSelectedItems(items);
        expect(values).toBeDefined();
        expect(values).toContain('Cab');
        expect(values).toContain('Amsterdam');
        expect(values).toContain('Brussels');
        compInstance.key = 'text';
        expect(values).toBeDefined();
        expect(values[3].text).toEqual('MohitS');
    });
    it('Should test selectMatch function for multiselect component.', function () {
        var item1 = { "id": 66, "display": "Cab", "value": "Cab", "text": "item1" };
        var item2 = { "id": 67, "display": "Amsterdam", "value": "Amsterdam", "text": "item2" };
        var item3 = { "id": 69, "display": "Brussels", "value": "Brussels", "text": "item3" };
        var item4 = { "id": 71, "display": "MohitS", "text": "MohitS",
            "value": { "id": 1, "name": "Mohit", "type": "USER", "text": "MohitS" } };
        compInstance.options.push(item1);
        compInstance.options.push(item2);
        compInstance.options.push(item3);
        compInstance.options.push(item4);
        compInstance.multiple = true;
        compInstance.selectMatch(item1, void 0);
        expect(compInstance.active.length).toBeDefined();
        expect(compInstance.active.length).toBe(1);
        compInstance.selectMatch(item2, void 0);
        compInstance.selectMatch(item3, void 0);
        expect(compInstance.active.length).toBe(3);
    });
    it('Should test hideOptions functions', function () {
        expect(compInstance.inputMode).toBeDefined();
        expect(compInstance.inputMode).toBeFalsy();
        expect(compInstance.optionsOpened).toBeDefined();
        expect(compInstance.optionsOpened).toBeFalsy();
    });
    it('Should test selectActive function.', function () {
        var item = { "id": 66, "display": "Cab", "value": "Cab", "text": "item1" };
        compInstance.selectActive(item);
        expect(compInstance.activeOption).toBeDefined();
        expect(compInstance.activeOption).toBe(item);
    });
    it('Should test isActive function.', function () {
        var item = { "id": 66, "display": "Cab", "value": "Cab", "text": "item1" };
        var item2 = { "id": 67, "display": "Amsterdam", "value": "Amsterdam", "text": "item2" };
        compInstance.activeOption = item;
        expect(compInstance.isActive(item)).toBeDefined();
        expect(compInstance.isActive(item)).toBeTruthy();
        compInstance.activeOption = item2;
        expect(compInstance.isActive(item)).toBeFalsy();
    });
    it('Should test open function.', function () {
        compInstance.open();
        expect(compInstance.optionsOpened).toBeDefined();
        expect(compInstance.optionsOpened).toBeTruthy();
    });
    it('Should test inputEvent function.', function () {
        var e = { keyCode: 27, preventDefault: null };
        e.preventDefault = function () { };
        compInstance.inputEvent(e);
        expect(compInstance.inputMode).toBeDefined();
        expect(compInstance.inputMode).toBeFalsy();
        expect(compInstance.optionsOpened).toBeDefined();
        expect(compInstance.optionsOpened).toBeFalsy();
    });
    it('Should inject the component', function () {
        expect(compInstance).toBeTruthy();
    });
    it('Should inject the itemObjects', function () {
        expect(compInstance.itemObjects).toBeDefined();
    });
    it('Should inject the options', function () {
        expect(compInstance.options).toBeDefined();
    });
    it('Should inject the active', function () {
        expect(compInstance.active).toBeDefined();
    });
    it('Should inject the config', function () {
        expect(compInstance.config).toBeDefined();
    });
    it('Should inject the config useBothWheelAxes as true.', function () {
        expect(compInstance.config.useBothWheelAxes).toBeTruthy();
    });
    it('Should inject the placeholder', function () {
        var testPlaceholder = 'Select a value...';
        expect(compInstance.placeholder).toBeDefined();
        expect(compInstance.placeholder).toEqual(testPlaceholder);
    });
    it('Should inject the textField', function () {
        var testStr = 'text';
        expect(compInstance.textField).toBeDefined();
        expect(compInstance.textField).toEqual(testStr);
    });
    it('Should inject the multiple', function () {
        expect(compInstance.multiple).toBeDefined();
        expect(compInstance.multiple).toBeFalsy();
    });
    it('Should inject the search', function () {
        expect(compInstance.search).toBeDefined();
        expect(compInstance.search).toBeTruthy();
    });
    it('Should inject the orderBy', function () {
        expect(compInstance.orderBy).toBeDefined();
        expect(compInstance.orderBy).toBe('');
    });
    it('Should inject the debounceInterval', function () {
        expect(compInstance.debounceInterval).toBeDefined();
        expect(compInstance.debounceInterval).toBe(250);
    });
    it('Should inject the term', function () {
        expect(compInstance.term).toBeDefined();
    });
    it('Should inject the closeOnEscape', function () {
        expect(compInstance.closeOnEscape).toBeDefined();
        expect(compInstance.closeOnEscape).toBeTruthy();
    });
});
//# sourceMappingURL=select-option.component.test.js.map