import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule,MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatToolbarModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
