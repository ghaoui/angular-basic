import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PrivateComponent } from './pages/private/private.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';

import { PathGuard } from './guards/path.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewClientComponent } from './pages/new-client/new-client.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { NewCompanyComponent } from './pages/new-company/new-company.component';
import { ServicesComponent } from './pages/services/services.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { SocialComponent } from './social/social.component';

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
  { path: 'social', component: SocialComponent },
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'users/new', component: NewClientComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'companies/new', component: NewCompanyComponent },
      { path: 'services/:userId', component: ServicesComponent },
      { path: 'invoice', component: InvoiceComponent },
    ],
    canActivate: [PathGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
