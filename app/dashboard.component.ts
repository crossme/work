import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
declare var $:any;
@Component({
    selector: 'dashboard',
    template: `
    <br />
    <h1>DASHBOARD Comp</h1>
    <div class="ticker">
    <h3>Latest News</h3>
    <ul id="ticker">
        <li>11Dummy data is benign information that does not contain any useful data, but serves to reserve spac...</li>
        <li>22For testing, dummy data can also be used as stubs or pad to avoid software testing iss...</li>
        <li>33In operational use, dummy data may be transmitted for OPSEC purposes.</li>
        <li>44Dummy data must be rigorously evaluated and documented to ensure that it does no...</li>
        <li>555The topic of this article may not meet Wikipedia's general notability guideline.</li>
    </ul>
</div>

    `,
    styleUrls: ['app/resources/css/site.css']

})

export class DashboardComponent implements OnInit{

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
    //console.log("location dash ", location.path;
  }

}
