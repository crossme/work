import { ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SelectComponent } from './select-option.component';
import { SelectItem } from './select-option-item';

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import  { WebBasicModule } from '../';
import { FormsModule }   from '@angular/forms';
import { PipeModule } from '../../pipes';
import { SharedModule } from '../shared';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG:  PerfectScrollbarConfigInterface = {
  suppressScrollX:  true
};

let compInstance:  SelectComponent;
let fixture:  ComponentFixture<SelectComponent>;
let el:  HTMLElement;

fdescribe('Component:  SelectComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:  [ BrowserModule, CommonModule, WebBasicModule,
                    FormsModule, PipeModule, SharedModule, ReactiveFormsModule,
                    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)],
            declarations :  [SelectComponent]

        });
        fixture = TestBed.createComponent(SelectComponent);
        compInstance = fixture.componentInstance;

    });
    it('Should test navigation by arrow keys.', () => {

       let item1 :  SelectItem = {'id': 66, 'display': 'Cab', 'value': 'Cab', 'text': 'item1'};
       let item2 :  SelectItem = {'id': 67, 'display': 'Amsterdam', 'value': 'Amsterdam', 'text': 'item2'};
       let item3 :  SelectItem = {'id': 69, 'display': 'Brussels', 'value': 'Brussels', 'text': 'item3'};
       let item4 :  SelectItem = {'id': 71, 'display': 'MohitS', 'text': 'MohitS',
                                 'value': {'id': 1, 'name': 'Mohit', 'type': 'USER', 'text': 'MohitS'}};

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


    it('Should test getSingleSelected function.', () => {
       let item1 :  SelectItem = {'id': 66, 'display': 'Cab', 'value': 'Cab', 'text': 'item1'};
       let item2 :  SelectItem = {'id': 67, 'display': 'Amsterdam', 'value': 'Amsterdam', 'text': 'item2'};
       let item3 :  SelectItem = {'id': 69, 'display': 'Brussels', 'value': 'Brussels', 'text': 'item3'};
       let item4 :  SelectItem = {'id': 71, 'display': 'MohitS', 'text': 'MohitS',
                                 'value': {'id': 1, 'name': 'Mohit', 'type': 'USER', 'text': 'MohitS'}};


       expect((compInstance as any).getSingleSelected(item1)).toEqual('Cab');
       expect((compInstance as any).getSingleSelected(item2)).toEqual('Amsterdam');
       expect((compInstance as any).getSingleSelected(item3)).toEqual('Brussels');
       compInstance.key = 'text';
       expect((compInstance as any).getSingleSelected(item4)).toEqual('MohitS');

    });

    it('Should test getSelectedItems function.', () => {
       let item1 :  SelectItem = {'id': 66, 'display': 'Cab', 'value': 'Cab', 'text': 'item1'};
       let item2 :  SelectItem = {'id': 67, 'display': 'Amsterdam', 'value': 'Amsterdam', 'text': 'item2'};
       let item3 :  SelectItem = {'id': 69, 'display': 'Brussels', 'value': 'Brussels', 'text': 'item3'};
       let item4 :  SelectItem = {'id': 71, 'display': 'MohitS', 'text': 'MohitS',
                                 'value': {'id': 1, 'name': 'Mohit', 'type': 'USER', 'text': 'MohitS'}};
       let items = [];
       items.push(item1);
       items.push(item2);
       items.push(item3);
       items.push(item4);
       // spyOn((compInstance as any).opened, 'emit');
       let values = (compInstance as any).getSelectedItems(items);

        expect(values).toBeDefined();
        expect(values).toContain('Cab');
        expect(values).toContain('Amsterdam');
        expect(values).toContain('Brussels');
        compInstance.key = 'text';
        expect(values).toBeDefined();
        expect(values[3].text).toEqual('MohitS');

        fixture.detectChanges();

        // console.log("(compInstance as any).opened.emit", (compInstance as any).opened.emit);

        // expect((compInstance as any).opened.emit).toHaveBeenCalled();
        // expect((compInstance as any).opened.emit).toHaveBeenCalledWith(false);
    });
    it('Should test selectMatch function for multiselect component.', () => {
       let item1 :  SelectItem = {'id': 66, 'display': 'Cab', 'value': 'Cab', 'text': 'item1'};
       let item2 :  SelectItem = {'id': 67, 'display': 'Amsterdam', 'value': 'Amsterdam', 'text': 'item2'};
       let item3 :  SelectItem = {'id': 69, 'display': 'Brussels', 'value': 'Brussels', 'text': 'item3'};
       let item4 :  SelectItem = {'id': 71, 'display': 'MohitS', 'text': 'MohitS',
                                 'value': {'id': 1, 'name': 'Mohit', 'type': 'USER', 'text': 'MohitS'}};

       compInstance.options.push(item1);
       compInstance.options.push(item2);
       compInstance.options.push(item3);
       compInstance.options.push(item4);

       compInstance.multiple = true;

       (compInstance as any).selectMatch(item1, void 0);
       expect(compInstance.active.length).toBeDefined();
       expect(compInstance.active.length).toBe(1);
       (compInstance as any).selectMatch(item2, void 0);
       (compInstance as any).selectMatch(item3, void 0);
       expect(compInstance.active.length).toBe(3);
    });

    it('Should test hideOptions functions', () => {
        expect((compInstance as any).inputMode).toBeDefined();
        expect((compInstance as any).inputMode).toBeFalsy();
        expect((compInstance as any).optionsOpened).toBeDefined();
        expect((compInstance as any).optionsOpened).toBeFalsy();

    });

    it('Should test selectActive function.', () => {
        let item :  SelectItem = {'id': 66, 'display': 'Cab', 'value': 'Cab', 'text': 'item1'};
        (compInstance as any).selectActive(item);
        expect((compInstance as any).activeOption).toBeDefined();
        expect((compInstance as any).activeOption).toBe(item);
    });

    it('Should test isActive function.', () => {
        let item :  SelectItem = {'id': 66, 'display': 'Cab', 'value': 'Cab', 'text': 'item1'};
        let item2 :  SelectItem = {'id': 67, 'display': 'Amsterdam', 'value': 'Amsterdam', 'text': 'item2'};
        (compInstance as any).activeOption = item;

        expect((compInstance as any).isActive(item)).toBeDefined();
        expect((compInstance as any).isActive(item)).toBeTruthy();
        (compInstance as any).activeOption = item2;
        expect((compInstance as any).isActive(item)).toBeFalsy();
    });

    it('Should test open function.', () => {
        (compInstance as any).open();
        expect((compInstance as any).optionsOpened).toBeDefined();
        expect((compInstance as any).optionsOpened).toBeTruthy();
    });

    it('Should test inputEvent function.', () => {
        let e = {keyCode :  27, preventDefault :  null};
        e.preventDefault = function(){};
        (compInstance as any).inputEvent(e);

        expect((compInstance as any).inputMode).toBeDefined();
        expect((compInstance as any).inputMode).toBeFalsy();
        expect((compInstance as any).optionsOpened).toBeDefined();
        expect((compInstance as any).optionsOpened).toBeFalsy();
    });

   it('Should test escapeRegExp function.', () => {
        const str = 'RandomText|\;,./';
        const compStr = 'RandomText\\|;,\\.\\/';
        let retValue = (compInstance as any).escapeRegExp(str);
        expect(retValue).toBeDefined();
        expect(retValue).toEqual(compStr);
    });

   it('Should test escapeRegExp function.', () => {
        const str = 'RandomTextByMohit';
        let retValue = (compInstance as any).escapeRegExp(str);
        expect(retValue).toBeDefined();
        expect(retValue).toEqual('RandomTextByMohit');
    });
   it('Should test escapeRegExp function.', () => {
        const str = '';
        let retValue = (compInstance as any).escapeRegExp(str);
        expect(retValue).toBeDefined();
        expect(retValue).toEqual('');
    });


   it('Should test createEvent function.', () => {
       let event = document.createEvent('Event');
       (compInstance as any).selectClick(event);
    });


   fit('Should test remove function for multiselect.', () => {
       let item1 :  SelectItem = {'id': 66, 'display': 'Cab', 'value': 'Cab', 'text': 'item1'};
       let item2 :  SelectItem = {'id': 67, 'display': 'Amsterdam', 'value': 'Amsterdam', 'text': 'item2'};
       let item3 :  SelectItem = {'id': 69, 'display': 'Brussels', 'value': 'Brussels', 'text': 'item3'};
       let item4 :  SelectItem = {'id': 71, 'display': 'MohitS', 'text': 'MohitS',
                                 'value': {'id': 1, 'name': 'Mohit', 'type': 'USER', 'text': 'MohitS'}};

       const stream1 = [ 'Cab' ];

       compInstance.options.push(item1);
       compInstance.options.push(item2);
       compInstance.options.push(item3);
       compInstance.options.push(item4);

       compInstance.multiple = true;

       compInstance.active.push(item1);
       compInstance.active.push(item2);
       compInstance.active.push(item3);

       let event = document.createEvent('Event');
       spyOn((compInstance as any), "doEvent").and.callThrough();

       spyOn((compInstance as any).removed, 'emit');

       spyOn((compInstance as any), "removed").and.callThrough();

       (compInstance as any).remove(event, item1);
       expect((compInstance as any).active).toBeDefined();
       expect((compInstance as any).active.length).toEqual(2);
       expect((compInstance as any).doEvent).toHaveBeenCalledWith('removed', item1);
       expect((compInstance as any).doEvent).toHaveBeenCalledWith('onChange', item1);

       expect((compInstance as any).removed.emit).toHaveBeenCalledWith('Cab');

       // expect((compInstance as any).removed.emit).toHaveBeenCalled();

       (compInstance as any).remove(event, item2);
       expect((compInstance as any).active).toBeDefined();
       expect((compInstance as any).active.length).toEqual(1);
       expect((compInstance as any).doEvent).toHaveBeenCalledWith('removed', item2);
       expect((compInstance as any).doEvent).toHaveBeenCalledWith('onChange', item2);


       (compInstance as any).remove(event, item3);
       expect((compInstance as any).active).toBeDefined();
       expect((compInstance as any).active.length).toEqual(0);
       expect((compInstance as any).doEvent).toHaveBeenCalledWith('removed', item3);
       expect((compInstance as any).doEvent).toHaveBeenCalledWith('onChange', item3);

       expect((compInstance as any).doEvent).toHaveBeenCalled();
    });

    it('Should test remove function for single-select.', () => {
       let item1 :  SelectItem = {'id': 66, 'display': 'Cab', 'value': 'Cab', 'text': 'item1'};
       let item2 :  SelectItem = {'id': 67, 'display': 'Amsterdam', 'value': 'Amsterdam', 'text': 'item2'};
       let item3 :  SelectItem = {'id': 69, 'display': 'Brussels', 'value': 'Brussels', 'text': 'item3'};
       let item4 :  SelectItem = {'id': 71, 'display': 'MohitS', 'text': 'MohitS',
                                 'value': {'id': 1, 'name': 'Mohit', 'type': 'USER', 'text': 'MohitS'}};

       compInstance.options.push(item1);
       compInstance.options.push(item2);
       compInstance.options.push(item3);
       compInstance.options.push(item4);

       compInstance.multiple = false;

       compInstance.active.push(item1);

       let event = document.createEvent('Event');
       spyOn((compInstance as any), "doEvent").and.callThrough();
       (compInstance as any).remove(event, item1);

       expect((compInstance as any).active).toBeDefined();
       expect((compInstance as any).active.length).toEqual(0);
       expect((compInstance as any).doEvent).toHaveBeenCalled();
       expect((compInstance as any).doEvent).toHaveBeenCalledWith('removed', item1);
       expect((compInstance as any).doEvent).toHaveBeenCalledWith('onChange', item1);

    });


    it('Should test matchClick function.', () => {
      (compInstance as any)._disabled = true;
      let event = document.createEvent('Event');
      spyOn((compInstance as any), "focusToInput").and.callThrough();
      spyOn((compInstance as any), "open").and.callThrough();

      (compInstance as any).matchClick(event);

      expect((compInstance as any).focusToInput).not.toHaveBeenCalled();
      expect((compInstance as any).open).not.toHaveBeenCalled();

      expect(compInstance.search).toBeTruthy();
      expect(compInstance.multiple).toBeFalsy();

      (compInstance as any)._disabled = false;
      (compInstance as any).matchClick(event);

      expect((compInstance as any).focusToInput).toHaveBeenCalled();
      expect((compInstance as any).open).toHaveBeenCalled();

    });

   it('Should test mainClick function. Testing _disabled attribute', () => {
      (compInstance as any)._disabled = true;
      let event = document.createEvent('Event');
      (compInstance as any).mainClick(event);

      spyOn((compInstance as any), "focusToInput").and.callThrough();
      spyOn((compInstance as any), "open").and.callThrough();
      spyOn((compInstance as any), "inputEvent").and.callThrough();
      spyOn((compInstance as any), "hideOptions").and.callThrough();
      expect((compInstance as any).focusToInput).not.toHaveBeenCalled();
      expect((compInstance as any).open).not.toHaveBeenCalled();
      expect((compInstance as any).inputEvent).not.toHaveBeenCalled();
      expect((compInstance as any).hideOptions).not.toHaveBeenCalled();
    });
   it('Should test mainClick function. Testing function call for keyCode = 46.', () => {
      (compInstance as any)._disabled = false;
      let event = document.createEvent('Event');
      event['keyCode'] = 46;

      spyOn((compInstance as any), "focusToInput").and.callThrough();
      spyOn((compInstance as any), "open").and.callThrough();
      spyOn((compInstance as any), "inputEvent").and.callThrough();
      spyOn((compInstance as any), "hideOptions").and.callThrough();
      (compInstance as any).mainClick(event);
      expect((compInstance as any).focusToInput).not.toHaveBeenCalled();
      expect((compInstance as any).open).not.toHaveBeenCalled();
      expect((compInstance as any).inputEvent).toHaveBeenCalled();
      expect((compInstance as any).inputEvent).toHaveBeenCalledWith(event);
      expect((compInstance as any).hideOptions).not.toHaveBeenCalled();
    });

   it('Should test mainClick function. Testing function call for keyCode = 8.', () => {
      (compInstance as any)._disabled = false;
      let event = document.createEvent('Event');
      event['keyCode'] = 8;
      spyOn((compInstance as any), "focusToInput").and.callThrough();
      spyOn((compInstance as any), "open").and.callThrough();
      spyOn((compInstance as any), "inputEvent").and.callThrough();
      spyOn((compInstance as any), "hideOptions").and.callThrough();
      (compInstance as any).mainClick(event);
      expect((compInstance as any).focusToInput).not.toHaveBeenCalled();
      expect((compInstance as any).open).not.toHaveBeenCalled();
      expect((compInstance as any).inputEvent).toHaveBeenCalled();
      expect((compInstance as any).inputEvent).toHaveBeenCalledWith(event, true);
      expect((compInstance as any).hideOptions).not.toHaveBeenCalled();
    });



   it('Should test mainClick function. Testing function call for keyCode = 27', () => {
      (compInstance as any)._disabled = false;
      (compInstance as any).closeOnEscape = true;
      let event = document.createEvent('Event');
      event['keyCode'] = 27;
      spyOn((compInstance as any), "focusToInput").and.callThrough();
      spyOn((compInstance as any), "open").and.callThrough();
      spyOn((compInstance as any), "inputEvent").and.callThrough();
      spyOn((compInstance as any), "hideOptions").and.callThrough();
      (compInstance as any).mainClick(event);

      expect((compInstance as any).focusToInput).not.toHaveBeenCalled();
      expect((compInstance as any).open).not.toHaveBeenCalled();
      expect((compInstance as any).inputEvent).not.toHaveBeenCalled();
      expect((compInstance as any).hideOptions).toHaveBeenCalled();
    });

    it('Should test mainClick function. Testing function call for keyCode = 13', () => {
      (compInstance as any)._disabled = false;
      (compInstance as any).inputMode = false;

      let event = document.createEvent('Event');
      event['keyCode'] = 13;

      spyOn((compInstance as any), "focusToInput").and.callThrough();
      spyOn((compInstance as any), "open").and.callThrough();
      spyOn((compInstance as any), "inputEvent").and.callThrough();
      spyOn((compInstance as any), "hideOptions").and.callThrough();
      (compInstance as any).mainClick(event);

      expect((compInstance as any).focusToInput).toHaveBeenCalled();
      expect((compInstance as any).focusToInput).toHaveBeenCalledWith('');
      expect((compInstance as any).open).toHaveBeenCalled();
      expect((compInstance as any).inputEvent).not.toHaveBeenCalled();
      expect((compInstance as any).hideOptions).not.toHaveBeenCalled();
    });

    it('Should test mainClick function. Testing function call for inputMode = true.', () => {
      (compInstance as any)._disabled = false;
      (compInstance as any).inputMode = true;

      let event = document.createEvent('Event');


      spyOn((compInstance as any), "focusToInput").and.callThrough();
      spyOn((compInstance as any), "open").and.callThrough();
      spyOn((compInstance as any), "inputEvent").and.callThrough();
      spyOn((compInstance as any), "hideOptions").and.callThrough();
      (compInstance as any).mainClick(event);

      expect((compInstance as any).focusToInput).not.toHaveBeenCalled();
      expect((compInstance as any).inputEvent).not.toHaveBeenCalledWith('');
      expect((compInstance as any).open).not.toHaveBeenCalled();
      expect((compInstance as any).hideOptions).not.toHaveBeenCalled();
    });

    it('Should test mainClick function. Testing function call for keyCode = 100', () => {
      (compInstance as any)._disabled = false;
      (compInstance as any).inputMode = false;

      let event = document.createEvent('Event');
      event['keyCode'] = 100;
      spyOn((compInstance as any), "focusToInput").and.callThrough();
      spyOn((compInstance as any), "open").and.callThrough();
      spyOn((compInstance as any), "inputEvent").and.callThrough();
      spyOn((compInstance as any), "hideOptions").and.callThrough();
      (compInstance as any).mainClick(event);

      expect((compInstance as any).focusToInput).toHaveBeenCalled();
      expect((compInstance as any).focusToInput).toHaveBeenCalledWith('4');
      expect((compInstance as any).open).toHaveBeenCalled();
      expect((compInstance as any).inputEvent).toHaveBeenCalled();
      expect((compInstance as any).inputEvent).toHaveBeenCalledWith(event);
      expect((compInstance as any).hideOptions).not.toHaveBeenCalled();
    });



    it('Should test focusToInput function.', () => {

      (compInstance as any).inputMode = false;

      spyOn((compInstance as any), "focusToInput").and.callThrough();

      (compInstance as any).focusToInput();

      expect((compInstance as any).focusToInput).toHaveBeenCalled();
      expect((compInstance as any).inputMode).toBeTruthy();
      expect((compInstance as any).el).toBeUndefined();

    });

    it('Should test open function.', () => {
      (compInstance as any).optionsOpened = false;
       let item1 :  SelectItem = {'id': 66, 'display': 'Cab', 'value': 'Cab', 'text': 'item1'};
       let item2 :  SelectItem = {'id': 67, 'display': 'Amsterdam', 'value': 'Amsterdam', 'text': 'item2'};
       let item3 :  SelectItem = {'id': 69, 'display': 'Brussels', 'value': 'Brussels', 'text': 'item3'};
       let item4 :  SelectItem = {'id': 71, 'display': 'MohitS', 'text': 'MohitS',
                                 'value': {'id': 1, 'name': 'Mohit', 'type': 'USER', 'text': 'MohitS'}};

      compInstance.options.push(item1);
      compInstance.options.push(item2);
      compInstance.options.push(item3);
      compInstance.options.push(item4);

      compInstance.itemObjects = compInstance.options;

      compInstance.active.push(item1);
      compInstance.active.push(item2);

      (compInstance as any).inputMode = false;
      spyOn((compInstance as any), "open").and.callThrough();
      (compInstance as any).open();
      expect((compInstance as any).open).toHaveBeenCalled();
      expect((compInstance as any).optionsOpened).toBeTruthy();

      expect((compInstance as any).options.length).toEqual(2);
      expect((compInstance as any).itemObjects.length).toEqual(4);
      compInstance.active.push(item3);
      (compInstance as any).open();
      expect((compInstance as any).options.length).toEqual(1);
      expect((compInstance as any).itemObjects.length).toEqual(4);
      compInstance.active.push(item4);
      (compInstance as any).open();
      expect((compInstance as any).options.length).toEqual(0);
      expect((compInstance as any).itemObjects.length).toEqual(4);

    });

    it('Should test selectActiveMatch function for multiselect component.', () => {
       let item1 :  SelectItem = {'id': 66, 'display': 'Cab', 'value': 'Cab', 'text': 'item1'};
       let item2 :  SelectItem = {'id': 67, 'display': 'Amsterdam', 'value': 'Amsterdam', 'text': 'item2'};
       let item3 :  SelectItem = {'id': 69, 'display': 'Brussels', 'value': 'Brussels', 'text': 'item3'};
       let item4 :  SelectItem = {'id': 71, 'display': 'MohitS', 'text': 'MohitS',
                                 'value': {'id': 1, 'name': 'Mohit', 'type': 'USER', 'text': 'MohitS'}};

       compInstance.options.push(item1);
       compInstance.options.push(item2);
       compInstance.options.push(item3);
       compInstance.options.push(item4);

       compInstance.multiple = false;
       compInstance.activeOption = item1;

       spyOn((compInstance as any), "selectMatch").and.callThrough();
       spyOn((compInstance as any), "doEvent").and.callThrough();
       spyOn((compInstance as any), "hideOptions").and.callThrough();

       (compInstance as any).selectActiveMatch();

      expect((compInstance as any).selectMatch).toHaveBeenCalled();
      expect((compInstance as any).selectMatch).toHaveBeenCalledWith(compInstance.activeOption);
      expect((compInstance as any).active[0]).toEqual(item1);
      expect((compInstance as any).doEvent).toHaveBeenCalledWith('selected', item1);
      expect((compInstance as any).doEvent).toHaveBeenCalledWith('onChange', item1);
      expect((compInstance as any).hideOptions).toHaveBeenCalled();

    });

    it('Should test items function for multiselect component when value is an array of numbers.', () => {
      let  items6: Array<number> = [2, 3, 1];

      (compInstance as any).items = items6;
      expect((compInstance as any).itemObjects.length).not.toBeNull();
      expect((compInstance as any).itemObjects.length).toBeDefined();
      expect((compInstance as any).itemObjects.length).toEqual(3);
      expect((compInstance as any)._items.length).not.toBeNull();
      expect((compInstance as any)._items.length).toBeDefined();
      expect((compInstance as any)._items.length).toEqual(3);


    });
    it('Should test items function for multiselect component when value is an array of strings.', () => {
       let  items6: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
        'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
        'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
        'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
        'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'London', 'Kraków', 'Madrid',
        'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
        'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
        'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
        'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

      (compInstance as any).items = items6;
      expect((compInstance as any).itemObjects.length).not.toBeNull();
      expect((compInstance as any).itemObjects.length).toBeDefined();
      expect((compInstance as any).itemObjects.length).toEqual(58);
      expect((compInstance as any)._items.length).not.toBeNull();
      expect((compInstance as any)._items.length).toBeDefined();
      expect((compInstance as any)._items.length).toEqual(58);


    });
    it('Should test items setter function for multiselect component when value is null.', () => {
      let  items6: Array<string> = null;

      (compInstance as any).items = items6;
      expect((compInstance as any).itemObjects.length).not.toBeNull();
      expect((compInstance as any)._items.length).not.toBeNull();
      expect((compInstance as any).itemObjects.length).toEqual(0);
      expect((compInstance as any)._items.length).toEqual(0);

    });

    it('Should test items setter function for multiselect component when value is null.', () => {
      let  items6: Array<string> = null;

      (compInstance as any).items = items6;
      expect((compInstance as any).itemObjects.length).not.toBeNull();
      expect((compInstance as any)._items.length).not.toBeNull();
      expect((compInstance as any).itemObjects.length).toEqual(0);
      expect((compInstance as any)._items.length).toEqual(0);

    });
    it('Should test items setter function for multiselect component when value is undefined.', () => {
      let  items6: Array<string> = undefined;

      (compInstance as any).items = items6;
      expect((compInstance as any).itemObjects.length).not.toBeNull();
      expect((compInstance as any)._items.length).not.toBeNull();
      expect((compInstance as any).itemObjects.length).toEqual(0);
      expect((compInstance as any)._items.length).toEqual(0);

    });

    it('Should test disabled setter function for multiselect component when value parameter is empty array.', () => {
      let  items6: Array<string> = [];
      (compInstance as any).items = items6;
      expect((compInstance as any).itemObjects.length).not.toBeNull();
      expect((compInstance as any)._items.length).not.toBeNull();
      expect((compInstance as any).itemObjects.length).toEqual(0);
      expect((compInstance as any)._items.length).toEqual(0);
    });

    it('Should test disabled setter function for multiselect component when true is value parameter.', () => {
      let  items6: Array<number> = [2, 3, 1];
      spyOn((compInstance as any), "hideOptions").and.callThrough();
      spyOn((compInstance as any), "disabled").and.callThrough();

      (compInstance as any).disabled = true;
      (compInstance as any).items = items6; // disabled setter called here.

      expect((compInstance as any).itemObjects.length).not.toBeNull();
      expect((compInstance as any)._items.length).not.toBeNull();
      expect((compInstance as any).itemObjects.length).toEqual(3);
      expect((compInstance as any)._items.length).toEqual(3);
      expect((compInstance as any)._disabled).toBeTruthy();
      expect((compInstance as any).hideOptions).toHaveBeenCalled();
      expect((compInstance as any).inputMode).toBeFalsy();
      expect((compInstance as any).optionsOpened).toBeFalsy();
      console.log((compInstance as any).documentClickEvent);

    });
    it('Should test disabled getter function for multiselect component when true is value parameter.', () => {
      let  items6: Array<number> = [2, 3, 1];
      (compInstance as any).disabled = true;
      (compInstance as any).items = items6; // disabled setter called here.
      console.log("==",(compInstance as any).disabled);
      console.log("___",(compInstance as any)._disabled);
      expect((compInstance as any).disabled).toBeTruthy();
      expect((compInstance as any)._disabled).toBeTruthy();

    });
































    it('Should inject the component', () => {
        expect(compInstance).toBeTruthy();
    });
    it('Should inject the itemObjects', () => {
        expect(compInstance.itemObjects).toBeDefined();
    });
    it('Should inject the options', () => {
        expect(compInstance.options).toBeDefined();
    });
    it('Should inject the active', () => {
        expect(compInstance.active).toBeDefined();
    });

    it('Should inject the config', () => {
        expect(compInstance.config).toBeDefined();
    });

    it('Should inject the config useBothWheelAxes as true.', () => {
       expect(compInstance.config.useBothWheelAxes).toBeTruthy();
    });

    it('Should inject the placeholder', () => {
        let testPlaceholder = 'Select a value...';
        expect(compInstance.placeholder).toBeDefined();
        expect(compInstance.placeholder).toEqual(testPlaceholder);
    });

    it('Should inject the textField', () => {
        let testStr = 'text';
        expect(compInstance.textField).toBeDefined();
        expect(compInstance.textField).toEqual(testStr);
    });

    it('Should inject the multiple', () => {
        expect(compInstance.multiple).toBeDefined();
        expect(compInstance.multiple).toBeFalsy();
    });


    it('Should inject the search', () => {
        expect(compInstance.search).toBeDefined();
        expect(compInstance.search).toBeTruthy();
    });
    it('Should inject the orderBy', () => {
        expect(compInstance.orderBy).toBeDefined();
        expect(compInstance.orderBy).toBe('');
    });
    it('Should inject the debounceInterval', () => {
        expect(compInstance.debounceInterval).toBeDefined();
        expect(compInstance.debounceInterval).toBe(250);
    });
    it('Should inject the term', () => {
        expect(compInstance.term).toBeDefined();

    });
    it('Should inject the closeOnEscape', () => {
        expect(compInstance.closeOnEscape).toBeDefined();
        expect(compInstance.closeOnEscape).toBeTruthy();
    });
});
