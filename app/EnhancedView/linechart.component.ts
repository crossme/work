import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {StoreService} from '../../app/storeservice';

@Component({
  selector: '<linechart>',
  templateUrl: 'app/EnhancedView/linechart.component.html',
  providers: [],
  styleUrls: ['app/resources/css/site.css']
})

export class LineChartComponent implements OnInit{

	linechartData : any;

	 data: any;

    msgs: any;

    constructor() {
     let storeData = StoreService.prototype.linechartData;

     let labelsAr : Array<String> = [];
     let valueAr : Array<Number> = [];

     storeData.forEach((e) => {
        labelsAr.push(e.content);
        valueAr.push(e.BusyCounter);
     });
        this.linechartData = {
            labels: labelsAr,
            datasets: [
                {
                    label: 'First Dataset',
                    data: valueAr,
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                /*
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }*/
            ]
        }
    }

    selectData(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.linechartData.datasets[event.element._datasetIndex].data[event.element._index]});
    }
	ngOnInit(){

	}




}