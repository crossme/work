import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {StoreService} from '../../app/storeservice';
import * as _ from 'underscore';

@Component({
  selector: '<doughnut>',
  templateUrl: 'app/EnhancedView/doughnut.component.html',
  providers: [],
  styleUrls: ['app/resources/css/site.css']
})

export class DoughnutComponent {

	doughnutData : any;


    constructor() {

     let storeData = StoreService.prototype.doughnutData;

     let labelsAr : Array<String> = [];
     let valueAr : Array<Number> = [];
     let colorAr : Array<String> = [];
     let shuffleColorAr : any = [];

     storeData.forEach((e) => {
        labelsAr.push(e.content);
        valueAr.push(e.BusyCounter);
        colorAr.push(e.color);
     });
     shuffleColorAr = _.shuffle(colorAr);

    for (var i = shuffleColorAr.length - 1; i >= 0; i--) {
      let hex = StoreService.prototype.colourNameToHex(shuffleColorAr[i]);
      shuffleColorAr[i] = hex ? hex : '#000000';
    }

        this.doughnutData = {
            labels: labelsAr,
            datasets: [
                {
                    data: valueAr,
                    backgroundColor: colorAr,
                    hoverBackgroundColor: shuffleColorAr
                }]
            };
    }





}