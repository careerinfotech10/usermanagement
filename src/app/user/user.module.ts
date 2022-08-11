import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegristrationComponent } from './pages/regristration/regristration.component';
import { UnlockComponent } from './pages/unlock/unlock.component';
import { ForgotpwdComponent } from './pages/forgotpwd/forgotpwd.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [LoginComponent, RegristrationComponent, UnlockComponent, ForgotpwdComponent, DashboardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    RegristrationComponent,
    ForgotpwdComponent,
    UnlockComponent
  ]
})
export class UserModule { }
