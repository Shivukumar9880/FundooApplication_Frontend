import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'any'
})
export class UserService {

  constructor(public httpservice:HttpService) { }
  userlogin(data:Object)
  {
    return this.httpservice.login("User/Login",data)
  }
  usersignup(data:Object)
  {
    return this.httpservice.signup("User/Register",data)    
  }
}
