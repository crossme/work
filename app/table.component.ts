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
    cols : {field : string, header : string, content : string, color : string,}[];
    selectedUser : User;
    isRowEditable : boolean = false;

    constructor(private userService: UserService, private location :Location) { }

    ngOnInit() {
        //this.userService.getUsersMedium().then(users => this.users = users);
        //console.log("users", this.users);
        console.log("location table", location;
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

    onRowSelect(event) {
        this.newUser = false;
        this.user = this.cloneUser(event.data);
        this.displayDialog = true;
    }

    cloneUser(c: User): User {
        let user = new PrimeUser();
        for(let prop in c) {
            user[prop] = c[prop];
        }
        return user;
    }

    onRowSelect(event) {

    }

    onRowUnselect(event) {

    }

    findSelectedUserIndex(): number {
        return this.users.indexOf(this.selectedUser);
    }
}
