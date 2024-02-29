import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//we need import this 

import { UserService } from 'src/app/services/user-service/user.service';
import { Router } from '@angular/router';
import { Script } from 'vm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup
  submitted:boolean=false
  constructor(public formBuilder:FormBuilder,public user:UserService,public router: Router) { }

  ngOnInit(): void {

    this.loginForm=this.formBuilder.group({
      emailId:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }


  get loginControl(){
    return this.loginForm.controls
  }

  handleNavigation()
  {
    this.router.navigate(["signup"]);
  }

  handleLogin()
  {
     this.submitted=true;
     if(this.loginForm.invalid)return
     const {emailId,password}=this.loginForm.value
     
    // const obj={
    //   "emailId":"kiran@gmail.com",
    //   "password": "Kiran@123"
    // };


    this.user.userlogin({emailId:emailId,password:password}).subscribe(res=>{
      if(res.success == true)
      {
        alert("Login Success")
        localStorage.setItem("token",res.data)
      
        this.router.navigate(["dashboard/note"])
      }else{
        alert("Login Failure")
      }
   
      
    },error=>{

      alert("Login Failure")

      console.log(error);
    });
  }
}
