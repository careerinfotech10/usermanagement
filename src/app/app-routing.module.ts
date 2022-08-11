import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './user/pages/dashboard/dashboard.component';
import { ForgotpwdComponent } from './user/pages/forgotpwd/forgotpwd.component';
import { LoginComponent } from './user/pages/login/login.component';
import { RegristrationComponent } from './user/pages/regristration/regristration.component';
import { UnlockComponent } from './user/pages/unlock/unlock.component';


const routes: Routes = [
{
  path:'',
  component:DashboardComponent
}, 
{
  path:'login',
  component:LoginComponent
},
{
  path:'registration',
  component:RegristrationComponent
},
{
  path:'forgot',
  component:ForgotpwdComponent
},
{
  path:'unlock',
  component:UnlockComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
