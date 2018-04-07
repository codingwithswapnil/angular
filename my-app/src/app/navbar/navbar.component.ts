import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit() { }

  logout(){
    this.loginService.loginStatusByService = false;
    this.loginService.loggedInUsername = 'Guest';
    this.router.navigateByUrl('/login');
  }
}
