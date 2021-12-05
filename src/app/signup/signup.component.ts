import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit,OnChanges {
  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    userName: ['', [Validators.required, Validators.minLength(3)]],
    passwords: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', Validators.required],
      },
      { validator: this.comparePasswords }
    ),
  });

  error: string = '';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.signupForm);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes',changes);
  }
  ngAfterViewChecked() {
    console.log(this.signupForm);

  }

  get name() {return this.signupForm.get('name'); }
  get email() {return this.signupForm.get('email'); }
  get userName() {return this.signupForm.get('userName'); }
  get passwords() {return this.signupForm.get('passwords'); }

  get password() {return this.passwords?.get('password'); }
  get rePassword() {return this.passwords?.get('rePassword'); }

  comparePasswords(fb: FormGroup) {
    let confirmPasswordCtrl = fb.get('rePassword');
    if (
      confirmPasswordCtrl?.errors == null ||
      'passwordMismatch' in confirmPasswordCtrl.errors
    ) {
      if (fb.get('password')?.value != confirmPasswordCtrl?.value)
        confirmPasswordCtrl?.setErrors({ passwordMismatch: true });
      else confirmPasswordCtrl?.setErrors(null);
    }
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.error = 'login failed';
  }
}
