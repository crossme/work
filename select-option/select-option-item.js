"use strict";
/*
 * Counter variable to id of each item of SelectItem.
*/
var counter = 0;
var SelectItem = (function () {
    /**
     * This constructor creates each item of type SelectItem.
     * Valid for string || number || object.
     * id, display and value are fields of all items.
     * @param source: any, textField: string
     *
     * @returns NONE
     */
    function SelectItem(source, textField) {
        if (typeof source === 'string' || typeof source === 'number') {
            this.id = counter++;
            this.display = source;
            this.value = source;
        }
        if (typeof source === 'object') {
            this.id = counter++;
            this.display = source[textField];
            this.value = source;
        }
    }
    return SelectItem;
}());
exports.SelectItem = SelectItem;
//# sourceMappingURL=select-option-item.js.map