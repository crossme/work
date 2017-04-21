import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import {AppComponent}  from './app.component';
import {DashboardComponent}  from './dashboard.component';
import {UserDetailComponent}  from './user-detail.component';
import {TableComponent}  from './table.component';
import {Ng2BootstrapModule,AlertModule, CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import {UserService} from './users/userservice';
import {StoreService} from './storeservice';
import { RouterModule } from '@angular/router';
import { DoughnutComponent } from '../app/EnhancedView/doughnut.component';
import { BarChartComponent } from '../app/EnhancedView/barchart.component';
import { LineChartComponent } from '../app/EnhancedView/linechart.component';
import { PolarAreaChartComponent } from '../app/EnhancedView/polarareachart.component';
import { PieChartComponent } from '../app/EnhancedView/piechart.component';
import { RadarChartComponent } from '../app/EnhancedView/radarchart.component';
import {ImageCropperComponent} from 'ng2-img-cropper';

import {InputTextModule,DataTableModule,ButtonModule,DialogModule,
  SplitButtonModule,TabMenuModule,MenuModule,MessagesModule,
  InputSwitchModule,TooltipModule,ProgressBarModule,GalleriaModule,SlideMenuModule,MenuItem,ChartModule} from 'primeng/primeng';
@NgModule({
  imports:      [BrowserModule,FormsModule,HttpModule,InputTextModule,DataTableModule,ButtonModule,DialogModule,HttpModule,
                TabMenuModule,MenuModule,InputSwitchModule,TooltipModule,ProgressBarModule,GalleriaModule,Ng2BootstrapModule,
                AlertModule,CarouselModule,SplitButtonModule,ChartModule,MessagesModule,SlideMenuModule,
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
                  {
                    path : 'doughnut',
                    component: DoughnutComponent
                  },
                  {
                    path : 'barchart',
                    component: BarChartComponent
                  },
                  {
                    path : 'linechart',
                    component: LineChartComponent
                  },
                  {
                    path : 'polarareachart',
                    component: PolarAreaChartComponent
                  },
                  {
                    path : 'piechart',
                    component: PieChartComponent
                  },
                  {
                    path : 'radarchart',
                    component: RadarChartComponent
                  },
                ])
                ],
  declarations: [AppComponent, DashboardComponent, TableComponent, UserDetailComponent, DoughnutComponent, BarChartComponent,
                LineChartComponent,PolarAreaChartComponent,PieChartComponent,RadarChartComponent,ImageCropperComponent,
                 ],
  bootstrap:    [AppComponent],
  providers:    [ UserService, StoreService ]
})
export class AppModule { }
