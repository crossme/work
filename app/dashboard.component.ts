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

  constructor(private router : Router, private location :Location){
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

  ngOnInit():void{
    this.images = [];
    // this.images.push({source:'Ericsson-Entrance__DSC5589-2.jpg_3.jpg', alt:'ERICSSON NETWORKS', title:'WELCOME'});
    // this.images.push({source:'ericsson-office.jpg'});
    // this.images.push({source:'Ericsson-logo-blue-compressed.jpg'});
    // this.images.push({source:'Wordcloud-MOM-Workbench.png'});
this.images.push({source:'Wordcloud-MOM-Workbench.png'});
    

  }

}
