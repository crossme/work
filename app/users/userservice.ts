import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Car} from '../../app/users/user';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  randomQuote:any;
    constructor(private http: Http) {}

    getUsersMedium() {

        // var response =  this.http.get('http://127.0.0.1\:8080/test').map(data => data.json());
        // console.log(response);
        // return response;

        return this.http.get('http://backend.com\:8080/user/getall')
          .map((res:Response) => res.json());


    }
}
