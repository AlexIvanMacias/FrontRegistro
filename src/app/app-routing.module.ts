import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guards';

const routes: Routes = [
  // Web-Site
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // Login
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  // Verificacion de correo
  {
    path: 'validacion/:email_code/:password_code',
    loadChildren: './validate-email/validate-email.module#ValidateEmailModule',
  },
  // Dashboard
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    ,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
