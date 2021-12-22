import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PrivateComponent } from './pages/private/private.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';

import { PathGuard } from './guards/path.guard';
import { ProfileComponent } from './pages/profile/profile.component';

type Route = {
  path: string;
  component?: any;
  data?: any;
  children?: Route[];
  canActivate?: any[];
};

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'profile', component: ProfileComponent  },
    ],
    canActivate: [PathGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
