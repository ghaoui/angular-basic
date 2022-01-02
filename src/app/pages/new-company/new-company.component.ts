import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss'],
})
export class NewCompanyComponent implements OnInit {
  CompanyForm = this.fb.group({
    companyName: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    role: ['owner', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.CompanyForm.value);
    this.userService.addNewCompany(this.CompanyForm.value).subscribe((res) => {
      this.router.navigate(['/companies']);
    });
  }
}
