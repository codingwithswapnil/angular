import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  public loginStatusByService: boolean;
  public loggedInUsername: string;

  constructor() { 
    this.loginStatusByService = false;
    this.loggedInUsername = 'Guest';
  }
}
