import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
})
export class NewClientComponent implements OnInit {
  clientForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    role: ['client', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.clientForm.value);
    this.userService.register(this.clientForm.value).subscribe((res) => {
      this.router.navigate(['/users']);
    });
  }
}
