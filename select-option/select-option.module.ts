 /**
 * Necessary and sufficients imports for single or multi-select.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import  { WebBasicModule } from '../';
import { FormsModule }   from '@angular/forms';
import { SelectComponent } from './select-option.component';
import { PipeModule } from '../../pipes';
import { SharedModule } from '../shared';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';


/**
* PerfectScrollbar Specific Settings.
*/
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

/**
* Module for making a component of
* single or multi-select.
*/

@NgModule({
  imports: [ BrowserModule, CommonModule, WebBasicModule,
    FormsModule, PipeModule, SharedModule, ReactiveFormsModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)],
  declarations: [
                  SelectComponent
                ],
  exports: [SelectComponent]
})

/**
*
* Exported the entire module.
*/
export class SelectOptionModule { }
