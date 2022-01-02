import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  servicesForm = this.fb.group({
    name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    clientId: [this.route.snapshot.params['userId']],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.servicesForm.value);
    this.userService.addService(this.servicesForm.value).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
