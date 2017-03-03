import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, } from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../app/users/user';
import {StoreService} from './storeservice';

@Component({
  selector: '<user-detail>',
  templateUrl: 'app/user-detail.component.html',
  providers: [],
  styleUrls: ['app/resources/css/site.css']
})

export class UserDetailComponent implements OnInit{
  @Input() user : User;

  cols : any;
  splitButtonitems : any;
  slideMenuitems: any;
  isdisplay: Boolean;

  weeks : {id: number, content: string, color: string, BusyCounter : number}[]
  isRowEditable : boolean = true;
  constructor(private route : ActivatedRoute, private location: Location){}

  private getBusyCounter() : Array<number> {
    let ar : Array<number> = [];
    for (var i = 0; i < this.weeks.length; i++) {
      ar.push(this.weeks[i]['BusyCounter']);
    }
    return ar;
  }
  ngOnInit(){


    // get weeks and distribution.
    this.weeks = [
      {'id':1, 'content':"week1 content", 'color':"Red", 'BusyCounter': 150},
      {'id':2, 'content':"week2 content", 'color':"Blue", 'BusyCounter': 59},
      {'id':3, 'content':"week3 content", 'color':"Green", 'BusyCounter': 80},
      {'id':4, 'content':"week4 content", 'color':"Black", 'BusyCounter': 51},
      {'id':5, 'content':"week5 content", 'color':"Grey", 'BusyCounter': 56},
      {'id':6, 'content':"week6 content", 'color':"Pink", 'BusyCounter': 55},
      {'id':7, 'content':"week7 content", 'color':"Yellow", 'BusyCounter': 40},

    ];
    this.cols = [
                {field: 'id', header: 'ID'},
                {field: 'content', header: 'CONTENT'},

    ];

    StoreService.prototype.barChartData = this.weeks;
    StoreService.prototype.doughnutData = this.weeks;
    StoreService.prototype.linechartData = this.weeks;
    StoreService.prototype.pieChartData = this.weeks;
    StoreService.prototype.polarAreaChartData = this.weeks;


    this.splitButtonitems = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                //this.update();
            }},
            {label: 'Barchart', icon: 'fa-close',routerLink: ['/barchart'], command: () => {
              console.log("slideMenuitems Barchart called!", event);
                //this.delete();
            }},
            //{label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'DoughNut', icon: 'fa-paint-brush', routerLink: ['/doughnut']},
            {label: 'LineChart', icon: 'fa-paint-brush', routerLink: ['/linechart']},
            {label: 'PolarAreaChart', icon: 'fa-paint-brush', routerLink: ['/polarareachart']},
            {label: 'PieChart', icon: 'fa-paint-brush', routerLink: ['/piechart']},
            {label: 'RadarChart', icon: 'fa-paint-brush', routerLink: ['/radarchart']},
        ];
/*
     this.slideMenuitems = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                //this.update();
            }},
            {label: 'Barchart', icon: 'fa-close',routerLink: ['/barchart'], command: (event) => {
                console.log("slideMenuitems Barchart called!", event);
                //this.delete();
            }},
            //{label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'InnerMenu',
              items: [
              {label: 'DoughNut', icon: 'fa-paint-brush', routerLink: ['/doughnut']},
              {label: 'LineChart', icon: 'fa-paint-brush', routerLink: ['/linechart']},
              {label: 'PolarAreaChart', icon: 'fa-paint-brush', routerLink: ['/polarareachart']},
              {label: 'PieChart', icon: 'fa-paint-brush', routerLink: ['/piechart']},
              {label: 'RadarChart', icon: 'fa-paint-brush', routerLink: ['/radarchart']},
              ]
            }
        ];*/

    };
    showDialog(){
      this.isdisplay = true;
    }

    saveSplitButton(){
      console.log("split button clicked!");

    }

}
