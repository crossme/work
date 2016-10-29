import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import {AppComponent}  from './app.component';
import {CarService} from './cars/carservice';
import {UserService} from './users/userservice';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule} from 'primeng/primeng';

@NgModule({
  imports:      [BrowserModule,FormsModule,HttpModule,InputTextModule,DataTableModule,ButtonModule,DialogModule,HttpModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  providers:    [CarService, UserService]
})
export class AppModule { }
