import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

import { UserService } from '../service/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  private testUser: User = {
    name: 'Leonard Nimovy',
    username: 'spock',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  private testUser2: User = {
    id: 1,
    name: 'Leonard Nimovy',
    username: 'spock',
    email: 'spock@fed.up.com',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  constructor(private userService: UserService) {}

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done getting users')
    );
  }

  onGetUser(): void{
    this.userService.getUser().subscribe(
      (response)=> console.log(response),
      (error: any) => console.log(error),
      ()=> console.log('finished getting user')
    )
  }

  onCreateUser(): void{
    this.userService.createUser(this.testUser).subscribe(
      response => console.log(response),
      error => console.log(error),
      () => console.log(`finished creating users`)
    )
  }

  onUpdateUser(): void{
    this.userService.updateUser(this.testUser2).subscribe(
      response => console.log(response),
      error => console.log(error),
      ()=> console.log(`finished updating user`)
    )
  }



  ngOnInit(): void {
    console.log("GETTING ALL USERS")
    this.onGetUsers();
    console.log("NOW GETTING USER #1")
    this.onGetUser();
    console.log("NOW ADDING ONE USER")
    this.onCreateUser();
    console.log("NOW UPDATING USER 1")
    this.onUpdateUser();
    this.onGetUsers();
  }
}
