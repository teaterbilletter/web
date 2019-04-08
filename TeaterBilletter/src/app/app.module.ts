import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationbarComponent } from './static_content/navigationbar/navigationbar.component';
import { FooterComponent } from './static_content/footer/footer.component';
import { FrontpageShowsComponent } from './dynamic_content/frontpage-shows/frontpage-shows.component';
import { ShowInfoComponent } from './show-info/show-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    FooterComponent,
    FrontpageShowsComponent,
    ShowInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
