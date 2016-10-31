import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import {AppComponent}  from './app.component';
import {DashboardComponent}  from './dashboard.component';
import {UserDetailComponent}  from './user-detail.component';

import {TableComponent}  from './table.component';
import {CarService} from './cars/carservice';
import {UserService} from './users/userservice';
import { RouterModule } from '@angular/router';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule} from 'primeng/primeng';
import {TabMenuModule,MenuModule} from 'primeng/primeng';
import {InputSwitchModule,TooltipModule} from 'primeng/primeng';

@NgModule({
  imports:      [BrowserModule,FormsModule,HttpModule,InputTextModule,DataTableModule,ButtonModule,DialogModule,HttpModule,
                TabMenuModule,MenuModule,InputSwitchModule,TooltipModule,
                RouterModule.forRoot([
                  {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                  },
                  {
                    path : 'dashboard',
                    component: DashboardComponent
                  },
                  {
                    path : 'table',
                    component: TableComponent
                  },

                ])
                ],
  declarations: [AppComponent, DashboardComponent, TableComponent, UserDetailComponent],
  bootstrap:    [AppComponent],
  providers:    [CarService, UserService]
})
export class AppModule { }
