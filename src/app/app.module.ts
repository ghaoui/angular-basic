import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PrivateComponent } from './private/private.component';

import { PathGuard } from './path.guard';

type Route = {
  path: string;
  component?: any;
  data?: any;
  children?: Route[];
  canActivate?: any[];
};

const myRoutes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  {
    path: '',
    children: [{ path: 'private', component: PrivateComponent }],
    canActivate: [PathGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PrivateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
