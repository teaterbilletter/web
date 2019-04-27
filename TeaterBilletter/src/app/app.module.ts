import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationbarComponent } from './static_content/navigationbar/navigationbar.component';
import { FooterComponent } from './static_content/footer/footer.component';
import { FrontpageShowsComponent } from './dynamic_content/frontpage-shows/frontpage-shows.component';
import { LoginComponent } from './profile_content/authorization/login/login.component';
import { AuthorizationComponent } from './profile_content/authorization/authorization.component';
import { SignupComponent } from './profile_content/authorization/signup/signup.component';
import { ShowInfoComponent } from './dynamic_content/show-info/show-info.component';
import { UserProfileComponent } from './profile_content/user-profile/user-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ReservationComponent } from './dynamic_content/reservation/reservation.component';
import { SeatingComponent } from './dynamic_content/reservation/seating/seating.component';
import { AvailableTimeComponent } from './dynamic_content/reservation/available-time/available-time.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    FooterComponent,
    FrontpageShowsComponent,
    ShowInfoComponent,
    LoginComponent,
    AuthorizationComponent,
    SignupComponent,
    UserProfileComponent,
    PopUpComponent,
    ReservationComponent,
    SeatingComponent,
    AvailableTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
