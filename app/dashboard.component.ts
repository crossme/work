import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
declare var $:any;

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/resources/css/site.css']
})

export class DashboardComponent implements OnInit{

  images: any[];

  public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];

  constructor(private router : Router, private location :Location){

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

}
