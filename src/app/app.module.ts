import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { GithubComponent } from './components/github-info/github-info.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { CourseRedirectComponent } from './views/courses/components/course-redirect/course-redirect.component';
import { CoursesComponent } from './views/courses/courses.component';
import { EmailSignupComponent } from './views/home/components/email-signup/email-signup.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CoursesComponent,
    EmailSignupComponent,
    CourseRedirectComponent,
    TopOfPageComponent,
    FooterComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
