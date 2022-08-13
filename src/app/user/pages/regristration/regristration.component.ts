import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regristration',
  templateUrl: './regristration.component.html',
  styleUrls: ['./regristration.component.css']
})
export class RegristrationComponent implements OnInit {

  registerForm: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl('',
        [Validators.required,
        Validators.minLength(3)]),
      'email2': new FormControl('',
        [Validators.required,
        Validators.minLength(3)]),
      'password': new FormControl('',
        [Validators.required,
          Validators.minLength(6)]),
      'confirmPwd': new FormControl('',
        [Validators.required,
        Validators.minLength(6)])
    })
  }

  submitregisterDetails(){
    console.log(this.registerForm.value);
  }

}
