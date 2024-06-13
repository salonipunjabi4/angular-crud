import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userList: any = [];
  constructor(private _userService: UserService){
    // this._userService.getAllUsers.subscribe(result => {
    //   this.userList = result;
    //   console.log(result);
    // })

    this._userService.getAllUsers().subscribe(result => {
      this.userList = result;
      console.log(result);
    });
  }

}
