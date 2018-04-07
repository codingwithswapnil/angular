import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public loginService: LoginService, public router: Router) {
    if(!loginService.loginStatusByService)
    router.navigateByUrl('/login');
  }

  ngOnInit() { }
}
