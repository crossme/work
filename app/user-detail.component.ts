import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../app/users/user';


@Component({
  selector: '<user-detail>',
  templateUrl: 'app/user-detail.component.html',
  providers: [],
  styleUrls: ['app/resources/css/site.css']
})

export class UserDetailComponent implements OnInit{
  @Input()
  user : User;
  cols : any;
  splitButtonitems : any;
  slideMenuitems: any;
  isdisplay: Boolean;

  weeks : {id: number, content: string, color: string}[]
  isRowEditable : boolean = true;
  constructor(private route : ActivatedRoute, private location: Location){}

  ngOnInit(){
    this.weeks = [
      {'id':1, 'content':"week1 content", 'color':"Red"},
      {'id':2, 'content':"week2 content", 'color':"Blue"}

    ];
    this.cols = [
                {field: 'id', header: 'ID'},
                {field: 'content', header: 'CONTENT'},

    ];

     this.slideMenuitems = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                //this.update();
            }},
            {label: 'Barchart', icon: 'fa-close',routerLink: ['/barchart'], command: () => {

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
        ];

    /*this.splitButtonitems = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                //this.update();
            }},
            {label: 'Barchart', icon: 'fa-close',routerLink: ['/barchart'], command: () => {
                //this.delete();
            }},
            //{label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'DoughNut', icon: 'fa-paint-brush', routerLink: ['/doughnut']},
            {label: 'LineChart', icon: 'fa-paint-brush', routerLink: ['/linechart']},
            {label: 'PolarAreaChart', icon: 'fa-paint-brush', routerLink: ['/polarareachart']},
            {label: 'PieChart', icon: 'fa-paint-brush', routerLink: ['/piechart']},
            {label: 'RadarChart', icon: 'fa-paint-brush', routerLink: ['/radarchart']},
        ];*/


    };
    showDialog(){
      this.isdisplay = true;
    }

    saveSplitButton(){
      console.log("split button clicked!");

    }

}
