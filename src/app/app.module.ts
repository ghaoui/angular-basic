import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PrivateComponent } from './pages/private/private.component';
import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDialogComponent } from './pages/products/components/product-dialog/product-dialog.component';

import { ProductsService } from './services/products.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { usersReducer } from './reducers/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TopBarComponent } from './shared-components/top-bar/top-bar.component';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PrivateComponent,
    UsersComponent,
    ProductsComponent,
    ProductDialogComponent,
    TopBarComponent,
    //MatToolbarModule,
    // MatIconModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    StoreModule.forRoot({users: usersReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
