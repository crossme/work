import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import {AppComponent}  from './app.component';
import {DashboardComponent}  from './dashboard.component';
import {UserDetailComponent}  from './user-detail.component';
import {TableComponent}  from './table.component';
import { Ng2BootstrapModule,AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {UserService} from './users/userservice';
import { RouterModule } from '@angular/router';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule} from 'primeng/primeng';
import {TabMenuModule,MenuModule} from 'primeng/primeng';
import {InputSwitchModule,TooltipModule,ProgressBarModule,GalleriaModule} from 'primeng/primeng';

@NgModule({
  imports:      [BrowserModule,FormsModule,HttpModule,InputTextModule,DataTableModule,ButtonModule,DialogModule,HttpModule,
                TabMenuModule,MenuModule,InputSwitchModule,TooltipModule,ProgressBarModule,GalleriaModule,Ng2BootstrapModule,
                AlertModule,
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
  declarations: [AppComponent, DashboardComponent, TableComponent, UserDetailComponent  ],
  bootstrap:    [AppComponent],
  providers:    [ UserService]
})
export class AppModule { }
