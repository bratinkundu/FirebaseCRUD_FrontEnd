import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  registerForm : FormGroup
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Name:['', Validators.required],
      Email:['', Validators.required],
      PhoneNo:['', Validators.required],
      Address:['', Validators.required],
      Password:['',Validators.required]
    });
  }

}
