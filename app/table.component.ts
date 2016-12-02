import {Component} from '@angular/core';
import {User} from './users/user';
import {Message} from './users/message';
import {UserService} from './users/userservice';
import {Location} from '@angular/common';
import { RouterModule } from '@angular/router';


class PrimeUser implements User {
    constructor(public id?, public name?, public week1?, public week2?, public color?, public location?) {}
}

@Component({
	templateUrl: 'app/table.component.html',
	selector: 'table'
})
export class TableComponent {

	  displayDialog: boolean;
    user: User = new PrimeUser();
    selectedUser: User;
    newUser: boolean;
    users: User[];
    weeks : {id: number, content: string}[];
    cols : any;
    isRowEditable : boolean = false;
    progressBarvalue : number = 0;
    interval : number;


    constructor(private userService: UserService, private location :Location) { }

    ngOnInit() {
        //this.userService.getUsersMedium().then(users => this.users = users);
        //console.log("users", this.users);
        console.log("location table", location);
        console.log("users", this.users);
        this.users =
            [
              {
                "id":"1",
                "name":"Mohit",
              },
              {
                "id":"2",
                "name":"Rohit",
              },
              {
                "id":"3",
                "name":"Rohan",
              },
              {
                "id":"4",
                "name":"USer",
              },

            ];

        this.cols = [
                    {field: 'id', header: 'ID'},
                    {field: 'name', header: 'NAME'},


        ];

    }

    showDialogToAdd() {
        this.newUser = true;
        this.user = new PrimeUser();
        this.displayDialog = true;
    }

    save() {
        if(this.newUser)
            this.users.push(this.user);
        else
            this.users[this.findSelectedUserIndex()] = this.user;

        this.user = null;
        this.displayDialog = false;
    }

    delete() {
        this.users.splice(this.findSelectedUserIndex(), 1);
        this.user = null;
        this.displayDialog = false;
    }

/*    onRowSelect(event) {
        this.newUser = false;
        this.user = this.cloneUser(event.data);
        this.displayDialog = true;
    }
*/
    cloneUser(c: User): User {
        let user = new PrimeUser();
        for(let prop in c) {
            user[prop] = c[prop];
        }
        return user;
    }

    onRowSelect(event) {
        console.log("Row selected!", this.progressBarvalue);
        this.progressBarvalue = 1;
        this.interval = setInterval(()=>{
          if(this.progressBarvalue !== 0){
              if(this.progressBarvalue < 90){
                //this.progressBarvalue = this.progressBarvalue + Math.floor(Math.random() * 20) + 1;
                //Uncomment for progress bar fill time.
                this.progressBarvalue = this.progressBarvalue + Math.floor(Math.random() * 80) + 1;
              } else {
                  //Uncomment for progress bar fill time.
                //this.progressBarvalue = this.progressBarvalue + Math.floor(Math.random() * 5) + 1;
                this.progressBarvalue = this.progressBarvalue + Math.floor(Math.random() * 60) + 1;
              }
              if(this.progressBarvalue >=100){
                this.progressBarvalue = 100;
                clearInterval(this.interval);
              }
        }
        },500);
    }

    onRowUnselect(event) {
        console.log("unsel", event);
        this.progressBarvalue = 0;

        clearInterval(this.interval);
    }

    findSelectedUserIndex(): number {
        return this.users.indexOf(this.selectedUser);
    }
}
