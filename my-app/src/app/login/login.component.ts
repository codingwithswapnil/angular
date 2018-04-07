import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../User';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  loginStatus: number;
  userAvailable: number;
  registeredUsers: any[];
  loginStatusByService: boolean;

  constructor(public loginService: LoginService, public router: Router) {
    this.user = new User();
    this.loginStatus = -1;
    this.userAvailable = -1;
    this.registeredUsers = this.user.registeredUsers;

    // this.loginStatusByService = this.LoginService.loginStatusByService;
   }

  ngOnInit() {
  }

  login(loginForm){
    for(let i=0;i<this.registeredUsers.length;i++)
    {
      if(this.registeredUsers[i].userName == loginForm.form.value.userName && this.registeredUsers[i].password == loginForm.form.value.password)
      {
        this.loginStatus = 1;
        this.loginService.loginStatusByService = true;
        this.loginService.loggedInUsername = this.registeredUsers[i].name;

        this.router.navigateByUrl('/');

        break;
      }
      else
      {
        this.loginStatus = 0;
        this.loginService.loginStatusByService = false;
        this.loginService.loggedInUsername = 'Guest';
      }
    }
  }
}
