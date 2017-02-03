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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var select_option_item_1 = require("./select-option-item");
var Observable_1 = require("rxjs/Observable");
var forms_1 = require("@angular/forms");
var SelectComponent = (function () {
    function SelectComponent(element, sanitizer) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.options = [];
        this.itemObjects = [];
        this.active = [];
        this.config = { useBothWheelAxes: true };
        this.term = new forms_1.FormControl();
        this.allowClear = false;
        this.placeholder = '';
        this.textField = 'text';
        this.multiple = false;
        this.search = true;
        this.groupBy = '';
        this.orderBy = '';
        this.key = '';
        this.closeOnEscape = true;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
        this.selectionsChange = new core_1.EventEmitter();
        this.searchString = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.inputMode = false;
        this._optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this.element = element;
        /*Call to calling component only after :
         * 1. 1 second of event loop.
         * 2. Distinct keyword.
        */
        this.term.valueChanges
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(function (term) {
            _this.doEvent('searchString', term);
        });
    }
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            var _this = this;
            console.log(this.textField);
            if (!value) {
                this._items = [];
                this.itemObjects = [];
            }
            else {
                this._items = value.filter(function (item) {
                    if ((typeof item === 'string') || (typeof item === 'object' && item)) {
                        return item;
                    }
                });
                // Item constructed here.
                this.itemObjects = this._items.map(function (item) { return new select_option_item_1.SelectItem(item, _this.textField); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "selections", {
        set: function (items) {
            var _this = this;
            if (!items || items.length === 0) {
                this.active = [];
            }
            else {
                this.active = [];
                if (Array.isArray(items)) {
                    // Multiselect.
                    items.forEach(function (selectedItem) {
                        _this.itemObjects.forEach(function (item) {
                            selectedItem = typeof selectedItem === 'object' ? selectedItem.id : selectedItem;
                            if (selectedItem === item.value[_this.key] || selectedItem === item.value) {
                                _this.active.push(item);
                                return;
                            }
                        });
                    });
                }
                else {
                    // Single select.
                    this.itemObjects.forEach(function (item) {
                        if (items === item.value[_this.key] || items === item.value) {
                            _this.active[0] = item;
                        }
                    });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled === true) {
                this.hideOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.ngOnInit = function () {
        this.documentClickEvent = this.addDocumentClickEvent();
    };
    SelectComponent.prototype.ngOnDestroy = function () {
        this.documentClickEvent.unsubscribe();
    };
    Object.defineProperty(SelectComponent.prototype, "optionsOpened", {
        get: function () {
            return this._optionsOpened;
        },
        set: function (value) {
            this._optionsOpened = value;
            this.opened.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SelectComponent.prototype.navigation = function (keyCode) {
        var index = this.options.indexOf(this.activeOption);
        var destIndex = keyCode === 38 ? ((index - 1 < 0) ? this.options.length - 1 : index - 1) :
            ((index + 1 > this.options.length - 1) ? 0 : index + 1);
        this.activeOption = this.options[destIndex];
    };
    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
        var _this = this;
        if (isUpMode === void 0) { isUpMode = false; }
        // up
        if (!isUpMode && e.keyCode === 38) {
            e.preventDefault();
            this.navigation(e.keyCode);
            return;
        }
        // down
        if (!isUpMode && e.keyCode === 40) {
            e.preventDefault();
            this.navigation(e.keyCode);
            return;
        }
        // tab
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        // backspace
        if (!isUpMode && e.keyCode === 8) {
        }
        // esc
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            e.preventDefault();
            return;
        }
        // del
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(e, this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        // left
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            // e.preventDefault();
            return;
        }
        // right
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            // e.preventDefault();
            return;
        }
        // enter
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
            }
            e.preventDefault();
            return;
        }
        var target = e.target || e.srcElement;
        if (isUpMode && target) {
            if (target.value) {
                this.inputValue = target.value;
                this.options = this.itemObjects.filter(function (item) {
                    return ((typeof item.display === 'string') &&
                        item.display.match(new RegExp(_this.inputValue, 'ig'))) ? true : false;
                });
            }
            else {
                this.options = this.itemObjects;
            }
            this.optionsOpened = true;
        }
    };
    SelectComponent.prototype.escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    };
    SelectComponent.prototype.addDocumentClickEvent = function () {
        var _this = this;
        return Observable_1.Observable.fromEvent(document, 'click')
            .subscribe(function (e) {
            _this.hideOptions();
        });
    };
    SelectComponent.prototype.selectClick = function ($event) {
        $event.stopPropagation();
    };
    SelectComponent.prototype.remove = function ($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            var index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.selectionsChange.next(this.getSelectedItems(this.active));
            // this.data.next(this.getSelectedItems(this.active));
            this.doEvent('removed', item);
            this.doEvent('onChange', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.selectionsChange.next(this.active);
            // this.data.next(this.active);
            this.doEvent('removed', item);
            this.doEvent('onChange', item);
        }
    };
    SelectComponent.prototype.doEvent = function (type, value) {
        if (type === 'searchString') {
            this[type].next(value);
            return;
        }
        if (this[type] && value) {
            this[type].next(value.value[this.key] || value.value);
        }
    };
    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
        /*  public clickedOutside(): void {
              this.optionsOpened = false;
          }*/
        get: function () {
            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.matchClick = function (e) {
        if (this._disabled === true) {
            return;
        }
        if (this.search === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
    };
    SelectComponent.prototype.mainClick = function (event) {
        if (this._disabled === true) {
            return;
        }
        // Tab key code
        /*if (event.keyCode === 9) {
          event.preventDefault();
          return;
        }*/
        // Delete key
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        // backspace key
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        // ESC key to close the dropdown
        if (event.keyCode === 27 && this.closeOnEscape) {
            event.preventDefault();
            this.hideOptions();
            return;
        }
        // Enter key
        if (event.keyCode === 13 && !this.inputMode) {
            this.focusToInput('');
            this.open();
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        if (this.inputMode) {
            return;
        }
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    SelectComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    SelectComponent.prototype.isActive = function (value) {
        return this.activeOption && this.activeOption.id === value.id;
    };
    SelectComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        this.inputMode = true;
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('#searchBox');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 10);
    };
    SelectComponent.prototype.open = function () {
        var _this = this;
        this.options = this.itemObjects
            .filter(function (option) { return (!_this.active.find(function (o) { return option.id === o.id; })); });
        if (this.options.length > 0) {
        }
        this.optionsOpened = true;
    };
    SelectComponent.prototype.hideOptions = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    SelectComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    SelectComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.selectionsChange.next(this.getSelectedItems(this.active));
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.selectionsChange.next(this.active[0].value);
        }
        this.doEvent('selected', value);
        this.doEvent('onChange', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
    };
    SelectComponent.prototype.getSelectedItems = function (items) {
        var _this = this;
        return items.map(function (item) {
            return item.value[_this.key] || item.value;
        });
    };
    return SelectComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "allowClear", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "textField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "multiple", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "search", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "groupBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "orderBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "key", void 0);
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", core_1.TemplateRef)
], SelectComponent.prototype, "templateRef", void 0);
__decorate([
    core_1.ViewChild('container'),
    __metadata("design:type", core_1.ElementRef)
], SelectComponent.prototype, "containerViewChild", void 0);
__decorate([
    core_1.ViewChild('content'),
    __metadata("design:type", core_1.ElementRef)
], SelectComponent.prototype, "contentViewChild", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SelectComponent.prototype, "items", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SelectComponent.prototype, "selections", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SelectComponent.prototype, "disabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "closeOnEscape", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "selected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "removed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "typed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "opened", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "selectionsChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "searchString", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "onChange", void 0);
SelectComponent = __decorate([
    core_1.Component({
        selector: 'exp-select',
        styles: [require('./select-option.css')],
        template: require('./select-option.html')
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, platform_browser_1.DomSanitizer])
], SelectComponent);
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select-option.component.js.map