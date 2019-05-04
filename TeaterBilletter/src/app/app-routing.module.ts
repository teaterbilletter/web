import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { NavigationbarComponent } from './static_content/navigationbar/navigationbar.component';
import { FooterComponent } from './static_content/footer/footer.component';
import { FrontpageShowsComponent } from './dynamic_content/frontpage-shows/frontpage-shows.component';
import { LoginComponent } from './profile_content/authorization/login/login.component';
import { AuthorizationComponent } from './profile_content/authorization/authorization.component';
import { SignupComponent } from './profile_content/authorization/signup/signup.component';
import { ShowInfoComponent } from './dynamic_content/show-info/show-info.component';
import { UserProfileComponent } from './profile_content/user-profile/user-profile.component';
import {AuthGuard} from './authguard.service';

const appRoutes: Routes = [
  { path: '', component: FrontpageShowsComponent },
  { path: 'login', component: AuthorizationComponent},
  { path: 'show', component: ShowInfoComponent},
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
