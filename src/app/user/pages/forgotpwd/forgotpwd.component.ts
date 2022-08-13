import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

  forgotForm:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.forgotForm=new FormGroup({
      'email':new FormControl('',[
        Validators.required,
        Validators.minLength(3),
      ])
    })
  }
  forgotformSubmit(){
    console.log(this.forgotForm.value);
   }
}
