import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

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

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Intercept} from './intercept';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatepickerComponent } from './dynamic_content/reservation/datepicker/datepicker.component';
import {VisualComponentService} from './visualComponent.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './authguard.service';
import {AuthErrorHandler} from './authErrorHandler.service';
import {ShowService} from './service/show.service';
import {RestapiService} from './service/restapi.service';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {SeatingService} from './service/seating.service';

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
    AvailableTimeComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    NgHttpLoaderModule.forRoot()
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: Intercept,
    multi: true
    },
    {
      provide: ErrorHandler,
      useClass: AuthErrorHandler
    },
    VisualComponentService,
    AuthService,
    AuthGuard,
    ShowService,
    RestapiService,
    SeatingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
