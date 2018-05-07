import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from '../home/container/start/start.component';
import { DocsComponent } from '../home/container/docs/docs.component';
import { SendmailComponent } from '../home/container/sendmail/sendmail.component';
import { AlertComponent } from '../home/container/alert/alert.component';
import { LoginComponent } from '../home/container/login/login.component';
import { RegisterComponent } from '../home/container/register/register.component';
import { ProfileComponent } from '../home/container/profile/profile.component';

const addRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'exemples/sendmail', component: SendmailComponent },
  { path: 'exemples/notification', component: AlertComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'exemples/profile', component: ProfileComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      addRoutes, 
      {enableTracing: true}
    ),
  ],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }
