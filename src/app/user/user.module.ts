import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegristrationComponent } from './pages/regristration/regristration.component';
import { UnlockComponent } from './pages/unlock/unlock.component';
import { ForgotpwdComponent } from './pages/forgotpwd/forgotpwd.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserserviceService } from './userservice.service';
import{HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [LoginComponent, RegristrationComponent, UnlockComponent, ForgotpwdComponent, DashboardComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    RegristrationComponent,
    ForgotpwdComponent,
    UnlockComponent,
  ],
  providers:[
    UserserviceService
  ]
})
export class UserModule { }
