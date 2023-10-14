import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { UpdateProfileComponent } from './Components/update-profile/update-profile.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { StoriesComponent } from './Components/homepage/stories/stories.component';
import { NewsfeedsComponent } from './Components/homepage/newsfeeds/newsfeeds.component';
import { SidepanelComponent } from './Components/homepage/sidepanel/sidepanel.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UpdateProfileComponent,
    ForgotPasswordComponent,
    HomepageComponent,
    StoriesComponent,
    NewsfeedsComponent,
    SidepanelComponent,

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
