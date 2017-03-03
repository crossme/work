import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {StoreService} from '../../app/storeservice';

@Component({
  selector: '<radarchart>',
  templateUrl: 'app/EnhancedView/radarchart.component.html',
  providers: [],
  styleUrls: ['app/resources/css/site.css']
})

export class RadarChartComponent implements OnInit{

	radarChartData: any;

    constructor() {

   let storeData = StoreService.prototype.pieChartData;

     let labelsAr : Array<String> = [];
     let valueAr : Array<Number> = [];
     let colorAr : Array<String> = [];


     storeData.forEach((e) => {
        labelsAr.push(e.content);
        valueAr.push(e.BusyCounter);
        colorAr.push(e.color);
     });

        this.radarChartData = {
            labels: labelsAr,
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: valueAr
                },
                /*{
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }*/
            ]
        };
    }

	ngOnInit(){

	}




}