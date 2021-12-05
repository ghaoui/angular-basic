import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  

  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   remember: new FormControl(true),
  // });

  loginForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', Validators.required],
    remember: [true],
  });
  error: string = '';


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginForm.value);
    this.error = "login failed"
  }
}
