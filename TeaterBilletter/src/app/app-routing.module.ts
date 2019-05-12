import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { FrontpageShowsComponent } from './dynamic_content/frontpage-shows/frontpage-shows.component';
import { AuthorizationComponent } from './profile_content/authorization/authorization.component';
import { ShowInfoComponent } from './dynamic_content/show-info/show-info.component';
import { UserProfileComponent } from './profile_content/user-profile/user-profile.component';
import { AuthGuard } from './authguard.service';

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
