import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: '<polarareachart>',
  templateUrl: 'app/EnhancedView/polarareachart.component.html',
  providers: [],
  styleUrls: ['app/resources/css/site.css']
})

export class PolarAreaChartComponent implements OnInit{

	polarAreaChartData : any;

    constructor() {
        this.polarAreaChartData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        }
    }

    
	ngOnInit(){

	}




}