import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

type TokenObject = {
  access_token: string;
};
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
    userName: ['', [Validators.required]],
    password: ['', Validators.required],
    remember: [true],
  });
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginForm.value);
    // localStorage.setItem('token', '12345');
    this.usersService.login(this.loginForm.value).subscribe({
      next: ({ access_token }: any) => {
        localStorage.setItem('access_token', access_token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.error.message;
      },
    });
  }
}
