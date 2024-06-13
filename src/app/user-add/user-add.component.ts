import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  user: User = new User();
  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl(''),

  });
  submitted:boolean = false;
  constructor(private _formBuilder: FormBuilder, private _userService: UserService, private _router: Router){

  }

  ngOnInit(): void{
    this.userForm = this._formBuilder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      username:['', [Validators.required, Validators.minLength(5)]],
      phone:['', Validators.required],
      website:['', Validators.required],
    })
  }

  // get f(){
  //   return this.userForm.controls;
  // }

  addUser(): void{
    this.submitted = true;
    console.log(this.user);
    if(this.userForm.valid){
      console.log("Successfully submitted data...");
      this._userService.addNewUser(this.user).subscribe(result => {
        console.log(result);
      });
      this._router.navigate(['users']);
    }
    return;
  }

  reset(): void{
    this.submitted=false;
    this.userForm.reset();
  }

}
