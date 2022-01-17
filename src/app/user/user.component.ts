import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

import { UserService} from '../service/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  onGetUsers(): void{
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done getting users')
    );
  }

  ngOnInit(): void {
    this.onGetUsers();
  }

}
