import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {StoreService} from '../../app/storeservice';


@Component({
  selector: '<polarareachart>',
  templateUrl: 'app/EnhancedView/polarareachart.component.html',
  providers: [],
  styleUrls: ['app/resources/css/site.css']
})

export class PolarAreaChartComponent implements OnInit{

	polarAreaChartData : any;

    constructor() {

     let storeData = StoreService.prototype.barChartData;

     let labelsAr : Array<String> = [];
     let valueAr : Array<Number> = [];
     let colorAr : Array<String> = [];


     storeData.forEach((e) => {
        labelsAr.push(e.content);
        valueAr.push(e.BusyCounter);
     });

    this.polarAreaChartData = {
            datasets: [{
                data: valueAr,
                backgroundColor: colorAr,
                label: 'My dataset'
            }],
            labels: labelsAr
        }
    }

	ngOnInit(){

	}
}
