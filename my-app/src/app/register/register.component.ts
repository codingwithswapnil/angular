import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationStatus: number;
  userAvailable: number;
  user: User;
  registeredUsers: any[];

  constructor() {
    this.user = new User();
    this.registrationStatus = -1;
    this.userAvailable = -1;
    this.registeredUsers = this.user.registeredUsers;
  }

  ngOnInit() {
  }

  register(registerForm){

    // this.checkUserNameAvailability();
    this.registeredUsers.push({
      id: (this.registeredUsers.length + 1), 
      name: registerForm.form.value.name, 
      userName: registerForm.form.value.userName, 
      email: registerForm.form.value.email, 
      password: registerForm.form.value.password
    });

    this.registrationStatus = 1;
  }

  checkUserNameAvailability(){
    for(let i = 0; i < this.registeredUsers.length; i++)
    {
      if(this.registeredUsers[i].userName === this.user.userName)
      {
        this.userAvailable = 0;
        break;
      }
      else
        this.userAvailable = 1;
    }
  }
}

