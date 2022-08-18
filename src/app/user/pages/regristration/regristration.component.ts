import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../../userservice.service';

@Component({
  selector: 'app-regristration',
  templateUrl: './regristration.component.html',
  styleUrls: ['./regristration.component.css']
})
export class RegristrationComponent implements OnInit {

  userStatus: any;
  userLogin: boolean = false;
  registerForm: FormGroup
  constructor(private userservice: UserserviceService, private route: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'cityId': new FormControl('',
        [Validators.required]),
      'countryId': new FormControl('',
        [Validators.required]),
      'fname': new FormControl('',
        [Validators.required,
        Validators.minLength(3)]),
      'lname': new FormControl('',
        [Validators.required,
        Validators.minLength(3)]),
      'email': new FormControl('',
        [Validators.required,
        Validators.minLength(4)]),
      'gender': new FormControl('',
        [Validators.required]),
      'dob': new FormControl('',
        [Validators.required]),
      'phno': new FormControl('',
        [Validators.required,
        Validators.minLength(10)]),
      'stateId': new FormControl('',
        [Validators.required]),
    })
  }

  submitRegisterDetails(){
    
  }

 
}
