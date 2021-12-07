import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    this.http
      .get('https://nestjs-basic.herokuapp.com/users')
      .subscribe((data) => {
        console.log(data);
      });
  }

  register(user: User) {
    this.http
      .post('https://nestjs-basic.herokuapp.com/users', user)
      .subscribe((data) => {
        console.log(data);
      });
  }

  login(email: string, password: string) {
    this.http
      .post('https://nestjs-basic.herokuapp.com/login', { email, password })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
