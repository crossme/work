import {Component} from '@angular/core';
import {User} from './users/user';
import {Message} from './users/message';
import {UserService} from './users/userservice';

class PrimeUser implements User {
    constructor(public id?, public name?, public week1?, public week2?, public color?) {}
}

@Component({
	templateUrl: 'app/app.component.html',
	selector: 'my-app'
})
export class AppComponent {

	displayDialog: boolean;

    user: User = new PrimeUser();

    selectedUser: User;

    newUser: boolean;

    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsersMedium().then(users => this.users = users);
        console.log(this.users);
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

    findSelectedUserIndex(): number {
        return this.users.indexOf(this.selectedUser);
    }
}
