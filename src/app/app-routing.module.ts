import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {MusicComponent} from './music/music.component';
import {SignupComponent} from './signup/signup.component';
import {AuthGuard} from './shared/auth/auth.guard';
import {AdminComponent} from './admin/admin.component';
import {RoleGuardService} from './shared/auth/role-guard.service';
import {SigninComponent} from './signin/signin.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full'
  },
  {
    path: 'homepage', component: HomepageComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'signup/about', redirectTo: 'about', pathMatch: 'full'
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'music', component: MusicComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [RoleGuardService, AuthGuard],
    data: {expectedRole: 'ROLE_ADMIN'}
  },
  {
    path: 'signin', component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
