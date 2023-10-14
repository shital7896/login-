import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { UpdateProfileComponent } from './Components/update-profile/update-profile.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { StoriesComponent } from './Components/homepage/stories/stories.component';
import { SidepanelComponent } from './Components/homepage/sidepanel/sidepanel.component';
import { NewsfeedsComponent } from './Components/homepage/newsfeeds/newsfeeds.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'homepage', 
    component: HomepageComponent,
    children: [
      {
        path: 'stories', component: StoriesComponent
      },
      {
        path: 'sidepanel', component: SidepanelComponent
      },
      {
        path: 'newsfeeds', component: NewsfeedsComponent
      },
    ]

  },
  { path:'**',redirectTo:'login'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
