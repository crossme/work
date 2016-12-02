import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: '<piechart>',
  templateUrl: 'app/EnhancedView/piechart.component.html',
  providers: [],
  styleUrls: ['app/resources/css/site.css']
})

export class PieChartComponent implements OnInit{

	data: any;

    constructor() {
        this.data = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
        }
    

    
	ngOnInit(){

	}




}