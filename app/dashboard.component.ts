import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from './users/userservice';
import {Observable} from 'rxjs/Observable';

declare var $:any;

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/resources/css/site.css']
})

export class DashboardComponent implements OnInit{

  images: any[];
  public myList: Array<Object> = [
        {groupfield: 'Group 2', whatever: 'abc'},
        {groupfield: 'Group 1', whatever: 'def'},
        {groupfield: 'Group 2', whatever: 'ghi'},
        {groupfield: 'Group 2', whatever: 'jkl'},
        {groupfield: 'Group 2', whatever: 'mno'}
      ];;
  public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];
  myItems : any;



  observableFun(){
    const obs = Observable.from(['1',2,'3']);
    console.log('obsss',obs);




     obs.subscribe(
       x => console.log(x);
     );
/*
    let observable$ = new Observable(observer =>{
      console.log('observable created', observer);
      //observer.error(new Error("FUCK"));
      setTimeout(()=>{
        observer.next(100);

      },1000);

    });

     observable$.subscribe(
      val =>{
        console.log(val);
      },
      err =>{
        console.log(err);
      } ,
      complete =>{
        console.log('COMPLETED');
      }
    );
    let subscription2 = observable$.subscribe(
      val1 =>{
        console.log(val1);
      },
      err1 =>{
        console.log(err1);
      } ,
      complete1 =>{
        console.log('COMPLETED1');
      }
    );
*/
  }


  constructor(private router : Router, private location :Location, private userService : UserService){

    for (let i = 0; i < 4; i++) {
          this.addSlide(i);
        }

      setTimeout(() => {
                // run jQuery stuff here
              function ticker() {
                  $('#ticker li:first').slideUp(function() {
                      $(this).appendTo($('#ticker')).slideDown();
                  });
              }
              setInterval(function(){ ticker(); }, 5000);
        }, 4000);
  }

GetUSERSSS(){

  this.userService.getUsersMedium().subscribe(
    data =>{ this.myItems = data;
    console.log("kkkk");
  },
    err => console.error(err),
    () => console.log('Random Quote Complete')
    );;

}
  public addSlide(newWidth: number):void {
      //let newWidth = 600 + this.slides.length + 1;
      this.slides.push({
        image: `${newWidth}-a.jpg`,
        text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
        ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
      });
    }
  ngOnInit():void{

     this.images = [];
        this.images.push({source:'app/1.jpg', alt:'Description for Image 1', title:'Title 1'});
        this.images.push({source:'/app/2.jpg', alt:'Description for Image 2', title:'Title 2'});
        this.images.push({source:'/app/3.jpg', alt:'Description for Image 2', title:'Title 2'});

  }
  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

  private value:any = ['Athens'];
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

  public itemsToString(value:Array<any> = []):string {
    return value
      .map((item:any) => {
        return item.text;
      }).join(',');
  }



public getGroupBy(list: Array<any>, group_by: string): Array<any> {
var filtered = [];
    var prev_item = null;
    var group_changed = false;
    // this is a new field which is added to each item where we append "_CHANGED"
    // to indicate a field change in the list


    var new_field = group_by + '_CHANGED';

    // loop through each item in the list


    for (var i = list.length - 1; i >= 0; i--) {


      group_changed = false;

      // if not the first item
      if (prev_item !== null) {

        // check if the group by field changed
        if (prev_item[group_by] !== list[i][group_by]) {
          group_changed = true;
        }

        // otherwise we have the first item in the list which is new
      } else {
        group_changed = true;
      }

      // if the group changed, then add a new field to the item
      // to indicate this
      if (group_changed) {
        list[i][new_field] = true;
      } else {
        list[i][new_field] = false;
      }

      filtered.push(list[i]);
      prev_item = list[i];

    };

console.log(filtered);
    return filtered;


}

}
