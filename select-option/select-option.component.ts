import { Component, Input, Output, EventEmitter, HostListener,
          ElementRef, OnInit, OnDestroy, TemplateRef, ContentChild, ViewChild } from '@angular/core';
import { SelectItem } from './select-option-item';
import { Observable } from 'rxjs/Observable';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
import { FormControl } from '@angular/forms';

/**
* This component is the entry point of the docs module.
* It is used to create single-select and multi-select components.
*/

@Component({
  selector: 'exp-select',
  styles: [require('./select-option.css')],
  template: require('./select-option.html')

})
export class SelectComponent implements OnInit, OnDestroy {

  /**
  * options : Array<SelectItem>
  * Array of items in dropdown.
  */
  public options: Array<SelectItem> = [];

  /**
  * itemObjects : Array<SelectItem>
  * Array of ALL items passed.
  */
  public itemObjects: Array<SelectItem> = [];
  /**
  * activeOption : SelectItem
  * Currently selected item.
  */
  public activeOption: SelectItem;

  /**
  * element : ElementRef
  * Reference element.
  */
  public element: ElementRef;

  /**
  * active : Array<SelectItem>
  * Array of currently active selectItems.
  */
  public active: Array<SelectItem> = [];
  /**
  * config : PerfectScrollbarConfigInterface
  * configuration object for Perfet ScrollBar.
  */
  public config: PerfectScrollbarConfigInterface = {useBothWheelAxes: true};

  /**
  * term : FormControl()
  * Used in debouncing searchBox value.
  */
  public term = new FormControl();

  /**
  * documentClickEvent : any
  * Observable added in ngOnInit() for click.
  */
  private documentClickEvent: any;

  /**
  * inputMode : boolean
  * Can user input?
  */
  private inputMode: boolean = false;

  /**
  * _optionsOpened : boolean
  * optionsOpened in dropDown.
  */
  private _optionsOpened: boolean = false;

  /**
  * inputValue : string
  * User inputted value.
  */
  private inputValue: string = '';

  /**
  * _items : Array<any>
  * Items of List.
  */
  private _items: Array<any> = [];

  /**
  * _disabled : boolean
  *  is component disabled?
  */
  private _disabled: boolean = false;


  /**
  * List of Input params and their default values.
  */

  /**
  * allowClear : boolean
  * used for adding css class.
  */
  @Input() public allowClear: boolean = false;

  /**
  * placeholder : string
  *
  */
  @Input() public placeholder: string = 'Select a value...';

  /**
  * textField : string
  *
  */
  @Input() public textField: string = 'text';

  /**
  * multiple : boolean
  *
  */
  @Input() public multiple: boolean = false;

  /**
  * search : boolean
  *
  */
  @Input() search: boolean = true;

  /**
  * groupBy : string
  *
  */
  @Input() public groupBy: string;

  /**
  * orderBy : string
  *
  */
  @Input() public orderBy: string = '';

  /**
  * key : string
  *
  */
  @Input() public key: string;

  /**
  * debounceInterval : number
  * Default = 250
  */
  // Default debounce interval for searching.
  @Input() public debounceInterval: number = 250;

  /**
  * closeOnEscape : boolean
  *
  */
  @Input() closeOnEscape: boolean = true;

  /**
  * List of Output params and their initializations.
  */
  /**
  * data : EventEmitter<any>
  *
  */
  @Output() public data: EventEmitter<any> = new EventEmitter();

  /**
  * selected : EventEmitter<any>
  *
  */
  @Output() public selected: EventEmitter<any> = new EventEmitter();

  /**
  * removed : EventEmitter<any>
  *
  */
  @Output() public removed: EventEmitter<any> = new EventEmitter();

  /**
  * typed : EventEmitter<any>
  *
  */
  @Output() public typed: EventEmitter<any> = new EventEmitter();

  /**
  * opened : EventEmitter<any>
  *
  */
  @Output() public opened: EventEmitter<any> = new EventEmitter();

  /**
  * selectionsChange : EventEmitter<any>
  *
  */
  @Output() selectionsChange = new EventEmitter();

  /**
  * searchQuery : EventEmitter<any>
  *
  */
  @Output() public searchQuery: EventEmitter<any> = new EventEmitter();

  /**
  * onChange : EventEmitter<any>
  *
  */
  @Output() public onChange: EventEmitter<any> = new EventEmitter();

  /**
  * className : string
  * Add dynamic css class.
  */

  @Input() className: string;
  /**
  * templateRef : TemplateRef<any>
  *
  */
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

  /**
   * This function sets an input array
   * @param {Array} array to be initialised
   *        as values of the List of dropdown.
   * @example
   * public items6: Array<number> = [2, 3, 1];
   * <exp-select
             [multiple]="false"
             [items]="items6"
             placeholder="Select a value..">
     </exp-select>
   *
   * @returns - NA.
   */
  @Input()
  public set items(value: Array<any>) {
    if (!value) {
      this._items = [];
      this.itemObjects = [];
    } else {
      this._items = value.filter((item: any) => {
        if (item) {
          // Individual item is not null.
          return item;
        }
      });
      // Item constructed here.
      this.itemObjects = this._items.map((item: any) => new SelectItem(item, this.textField));
    }
  }
    /**
   * This function disables the dropdown.
   * @param value array array to be sorted
   * @example
   * <exp-select
         [multiple]="true"
         [items]="userGroupArray"
         [disabled]="true" placeholder="Select a value...">
      </exp-select>
   *
   * @returns NA
   */
  @Input()
  public set disabled(value: boolean) {
    this._disabled = value;
    if (this._disabled === true) {
      this.hideOptions();
    }
  }
  /**
   * This function returns disabled attribute of the dropdown.
   * @param NONE
   * @example
   * let isDisabled = this.disabled();
   * @returns NA
   */
  public get disabled(): boolean {
    console.log("disabled getter called!!");

      return this._disabled;
  }
    /**
   * This function set as selections of the single/multi-select
      from an input array.
   * @param {Array} items array to be pre-selected.
   * @example
   * <exp-select
       [(selections)]="singleSelect3"
       [multiple]="false"
       [items]="items3"
       placeholder="Select a value.."
    >
    </exp-select>

   *
   * @returns NA
   */
  @Input()
  set selections(items: any) {
      if (!items || items.length === 0) {
          this.active = [];
      } else {
          this.active = [];
          if (Array.isArray(items)) {
            // Multiselect.
            items.forEach((selectedItem) => {
                this.itemObjects.forEach((item) => {
                  if (selectedItem === item.value[this.key] || selectedItem === item.value) {
                     this.active.push(item);
                     return;
                  }
                });
            });
          } else {
            // Single select.
            this.itemObjects.forEach((item) => {
                  if (items === item.value[this.key] || items === item.value) {
                      this.active[0] = item;
                  }
            });
          }

      }
  }
  /**
   * This function called on loading of the component.
   * Debounce used for searching in the inputBox of the component.
   * Added clickevent.
   * @param NONE
   * @example
   * NA
   *
   * @returns NONE
   */
  public ngOnInit(): any {
    // console.log("ngOnInit called");
      // this.documentClickEvent = this.addDocumentClickEvent();
      /*Call to calling component only after :
     * 1. (this.debounceInterval) second of event loop.
     * 2. Distinct keyword.
    */
    this.term.valueChanges
             .debounceTime(this.debounceInterval)
             .distinctUntilChanged()
             .subscribe(term => {
                this.doEvent('searchQuery', term);
             });
  }
  /**
   * This function is called at last for destroy the component.
   * @param {Array} array array to be sorted
   * @example
   * NA
   *
   * @returns NONE
   */
  public ngOnDestroy(): any {
    // console.log("ngOnDestroy called");
  }

  /**
   * This will set the element as per params passed
   * @param element: ElementRef
   *
   * @returns NONE
   */
  public constructor(element: ElementRef) {
    // console.log("constructor called");
    this.element = element;
  }

 /**
   * This will set the value: bool for the options
      of the component.
   * @param value: boolean
   *
   * @returns NONE
   */
  private set optionsOpened(value: boolean) {
    console.log("optionsOpened===",value);
      this._optionsOpened = value;
      this.opened.emit(value);
  }
  /**
   * This will return _optionsOpened attribute of the component.
   * @param NONE
   *
   * @returns _optionsOpened
   */
  private get optionsOpened(): boolean{
    return this._optionsOpened;
  }
  /**
   * This will navigate among the items of the component.
   * @param keyCode : number
   * @example
     this.navigation(38); // up arrow key
     this.navigation(40); // down arrow key
   * @returns NONE
   */
  public navigation(keyCode : number) {
      let index = this.options.indexOf(this.activeOption);
      let destIndex = keyCode === 38 ? ( (index - 1 < 0) ? this.options.length - 1 : index - 1) :
       ((index + 1 > this.options.length - 1) ? 0 : index + 1);
      this.activeOption = this.options[destIndex];
  }
    /**
   * This function gets called upon firing of an event
   * @param e: any, isUpMode: boolean = false
   * @example
     (keyup)="inputEvent($event, true)"
   * @returns NONE
   */
  public inputEvent(e: any, isUpMode: boolean = false): void {
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
      return;
    }
    // right
    if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
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
    let target = e.target || e.srcElement;

    if (isUpMode && target) {
      this.inputValue = target.value;
      if (target.value) {
        this.options = this.itemObjects.filter((item) => {
        return ((typeof item.display === 'string') &&
          item.display.match(new RegExp(this.inputValue, 'ig'))) ? true : false;
    });
    } else {
      this.options = this.itemObjects;
    }
    this.optionsOpened = true;
    }
  }

   /**
   * This will escape string globally
   * @param str
   *
   * @returns Replaced string.
   */
  public escapeRegExp(str): any {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }
  /**
   * This will add document listener with click event.
   * @param NONE
   *
   * @returns Observable (click event).
   */
  private addDocumentClickEvent() {
      return Observable.fromEvent(document, 'click')
      .subscribe((e) => {
          this.hideOptions();
      });
  }
  /**
   * This will stop propagating the event Bubbling.
   * @param $event : event
   *
   * @returns NONE.
   */
  public selectClick($event) {
      $event.stopPropagation();
  }
  /**
   * This will remove the item from pre-selections
      or click of cross-button on ui.
   * @param $event, item: SelectItem
   *
   * @returns NONE.
   */
  public remove($event, item: SelectItem): void {
      $event.preventDefault();
      $event.stopPropagation();
      if (this._disabled === true) {
          return;
      }
      if (this.multiple === true && this.active) {
          let index = this.active.indexOf(item);
          this.active.splice(index, 1);
          this.selectionsChange.next(this.getSelectedItems(this.active));
          this.doEvent('removed', item);
          this.doEvent('onChange', item);
      }
      if (this.multiple === false) {
          this.active = [];
          this.selectionsChange.next(this.active);
          this.doEvent('removed', item);
          this.doEvent('onChange', item);
      }
  }

  /**
   * Thisis the ONLY event emitter for propagating
       all the event to other components.
   * @param type: string, value: any
   *
   * @returns NONE.
   */
  public doEvent(type: string, value: any): void {
    console.log("DOEVENT",value);
    console.log("DOEVENT",type);
      if (type === 'searchQuery') {
        (this as any)[type].next(value);
        return;
      }
      if ((this as any)[type] && value) {
        console.log("=========iff",this.getSingleSelected(value));
          (this as any)[type].next(this.getSingleSelected(value));

      }
  }
  /**
   * This will focus to inputBox and open the list
     of items of the component.
   * @param event
   *
   * @returns NONE.
   */
  protected matchClick(e: any): void {
      if (this._disabled === true) {
          return;
      }
      if (this.search === true && ((this.multiple === true && e) || this.multiple === false)) {
          this.focusToInput();
          this.open();
      }
  }
  /**
   * This will be called on various key strokes.
   * @param event
   *
   * @returns NONE.
   */
  protected  mainClick(event: any): void {
      if (this._disabled === true) {
          return;
      }
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
      let value = String
      .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
      .toLowerCase();
      this.focusToInput(value);
      this.open();
      let target = event.target || event.srcElement;
      if(target && target.value){
        target.value = value;
      }
      this.inputEvent(event);
  }
  /**
   * This will be called on mouseEnter event.
   * Mainly used for CSS current active item selection which is hovered.
   * @param value
   *
   * @returns NONE.
   */
  protected  selectActive(value: SelectItem): void {
    this.activeOption = value;
  }
  /**
   * This will be called for CSS class selection.
   * @param value
   *
   * @returns True/False
   */
  protected  isActive(value: SelectItem): boolean {
      return this.activeOption && this.activeOption.id === value.id;
  }

  /**
   * This will be called for focussing the SearchBox/ textBox
   * @param value: string
   *
   * @returns NONE
   */
  private focusToInput(value: string = ''): void {
    this.inputMode = true;
      setTimeout(() => {
          let el = this.element.nativeElement.querySelector('#searchBox');
          // console.log("this.element==", this.element);
          if (el) {
              el.focus();
              el.value = value;
          }
      }, 10);
  }
  /**
   * This will be used to open the Dropdown of items.
   * @param NONE
   *
   * @returns NONE
   */
  private open(): void {
      this.documentClickEvent = this.addDocumentClickEvent();
      this.options = this.itemObjects
      .filter((option: SelectItem) => (!this.active.find((o: SelectItem) => option.id === o.id)));
      this.optionsOpened = true;
  }
  /**
   * This function will be used to Hide the Dropdown of items.
   * @param NONE
   *
   * @returns NONE
   */
  private hideOptions(): void {
      if (this.documentClickEvent) {
        this.documentClickEvent.unsubscribe();
      }
      this.inputMode = false;
      this.optionsOpened = false;
  }

  /**
   * This function will be used to call SelectMatch() for emitting values
     to the calling component.
   * @param NONE
   *
   * @returns NONE
   */
  private selectActiveMatch(): void {
      this.selectMatch(this.activeOption);
  }

  /**
   * This function will be used to stop Event bubbling
       and for emitting values to the calling component.
   * Hides Dropdown of items.
   * @param value: SelectItem, e: Event = void 0
   *
   * @returns NONE
   */
  private selectMatch(value: SelectItem, e: Event = void 0): void {
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
          this.selectionsChange.next(this.getSingleSelected(this.active[0]));

      }
      this.doEvent('selected', value);
      this.doEvent('onChange', value);

      this.hideOptions();
      if (this.multiple === true) {
          this.focusToInput('');
      }
  }

  /**
   * This function will maps to keys passed by parent component
     or returns value field by default.
   * Called for multiselect component.
   * @param items: Array<SelectItem>
   *
   * @returns items : Array
   */
  private getSelectedItems(items) {
      return items.map((item) => {
          return item.value[this.key] || item.value;
      });
  }

  /**
   * This function will maps to keys passed by parent component
     or returns value field by default.
   * Called for single-select component.
   * @param item: SelectItem
   * @returns item: SelectItem
   */
  private getSingleSelected(item) {
    return item.value[this.key] || item.value;
  }

}
