import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class StoreService {
  	barChartData : Array<number>;

    constructor(private http: Http) {
    	this.barChartData = undefined;
    }

    updateBarChartData(ar) {
    	this.barChartData = ar;
    }
}
