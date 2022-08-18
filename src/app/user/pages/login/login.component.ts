import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdata: any;
  userLogin: boolean = false;
  loginForm: FormGroup
  constructor(private userservice: UserserviceService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required,
      Validators.minLength(3)]),
      'pwd': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
    this.submitloginForm();
  }

  //login form//

  submitloginForm(){
    this.userservice.userloginData(this.loginForm.value).subscribe((data:any)=>{
      if(data==='SUCCESS'){
        this.loginForm.reset();
         this.userdata='Login Successfully';
         this.userLogin=true;
        setTimeout(() => {
          this.route.navigate(['']);
        }, 800);
      }
      else{ 
        this.userdata='Invalid Credentials';
      }
      
    },
    error=>{
      console.log(error);
    })
  }
}
