import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: '<user-detail>',
  templateUrl: 'app/user-detail.component.html',
  providers: [],
  styleUrls: ['app/resources/css/site.css']
})

export class UserDetailComponent implements OnInit{
  @Input()
  user : USER;

  weeks : {id: number, content: string, color: string}[]
  isRowEditable : boolean = true;
  constructor(private route : ActivatedRoute, private location: Location){}

  ngOnInit(){
    this.weeks = [
      {'id':1, 'content':"week1 content", 'color':"Red"},
      {'id':2, 'content':"week2 content", 'color':"Blue"}

    ];
    this.cols = [
                {field: 'id', header: 'ID'},
                {field: 'content', header: 'CONTENT'},

    ];


    });
  }
}
