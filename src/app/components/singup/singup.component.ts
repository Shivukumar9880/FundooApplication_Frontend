import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  public signupform!:FormGroup
  submitted:boolean=false
  constructor(public formBuilder:FormBuilder,public user:UserService,public router: Router) { }

  ngOnInit(): void {
    this.signupform=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      emailId:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  get signupControl(){
    return this.signupform.controls
  }
  // get User()
  // {
  //   return this.signupform.controls['firstName'];
  // }


  handleNavigation(){
    this.router.navigate(["login"])
  }
  handleSignup()
  {
     this.submitted=true;
     if(this.signupform.invalid)return;
     const {firstName,lastName,emailId,password}=this.signupform.value
      this.user.usersignup({firstName:firstName,lastName:lastName,emailId:emailId,password:password}).subscribe(res=>{
      console.log(res);
      
    },error=>{
      console.log(error);
    });
  }



}
