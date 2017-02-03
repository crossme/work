***********USES OF Multiselect COMPONENT**********************

1. Multiple selections
        <exp-select
                    [(selections)]="multiSelected"
                   [multiple]="true"
                    [items]="items"
                    [disabled]="disabled"
                    (selected)="selected($event)"
                    (removed)="removed($event)"
                    (searchQuery)="searchQuery($event)"
                    (onChange)="onChange($event)"
                    debounceInterval=2000
                      placeholder="No item selected" >

                  <template let-o>
                        <div>
                            {{o.display}}
                        </div>
                  </template>

        </exp-select>

2. Single selections
              <exp-select
                  [(selections)]="singleSelect"
                   [multiple]="false"
                    [items]="items"
                    [disabled]="disabled"
                    (selected)="selected($event)"
                    (removed)="removed($event)"
                    placeholder="No item selected" >
                    (searchQuery)="searchQuery($event)"
                    (onChange)="onChange($event)"
                    debounceInterval=2000
              </exp-select>

Example: guide-ui.html

Options:

selections:
Stores selected items from the dropdown. Two-way binding of items.

multiple: Boolean
    If true => Multiple items can be selected from dropdown.
    If false => Single item can be selected from dropdown.
    Default is false.

items: Array <Any>
    Array of items to be listed in the dropdown.

textField: string => key name to be displayed from the object. Default is 'text'. Required only for items of type Object.

(selected) : triggered on every selection and current selected item passed as parameter.

(removed) : triggered on item removal from the pre-selections. Current removed item is passed.

placeholder : String . Placeholder to display incase of empty selections. Default empty string.

textField : String. Default = 'text'
Property name to be displayed in the case of object.
Example :
public items:Array<Object> = [{id : 1, display: 'Display1'},{id : 2, display: 'Display2'}];

use textField="display" in template under the <exp-select> tag.

disabled:
By default value.
If set to true, then the component is in disabled status (greyed-out).
searchQuery:
Typing in the inputbox of the multiselect component triggers searchQuery($event) [in above cases] function in the calling component.

onChange:
Function called on each element addition/removal to/from the selections.

debounceInterval
Triggers searchQuery($event) [in above cases] function only after completion of defined interval.


