import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: '<doughnut>',
  templateUrl: 'app/EnhancedView/doughnut.component.html',
  providers: [],
  styleUrls: ['app/resources/css/site.css']
})

export class DoughnutComponent implements OnInit{

	doughnutData : any;
	
	constructor(){
		this.doughnutData = {
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