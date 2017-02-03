import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, } from '@angular/router';
import {Location} from '@angular/common';
import {StoreService} from '../../app/storeservice';

@Component({
  selector: '<barchart>',
  templateUrl: 'app/EnhancedView/barchart.component.html',
  providers: [  ],
  styleUrls: ['app/resources/css/site.css']
})

export class BarChartComponent implements OnInit{

	barChartData : any;



	constructor(private route : ActivatedRoute) {
        console.log( StoreService.prototype.barChartData);
       let storeData = StoreService.prototype.barChartData;
		 this.barChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: storeData
                },
                /*{
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                },*/

            ]
        };
	}
	ngOnInit(){


	}
    ngOnDestroy() {

    }



}