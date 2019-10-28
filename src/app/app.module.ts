import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './views/home/home.component';
import { CoursesComponent } from './views/courses/courses.component';
import { EmailSignupComponent } from './views/home/components/email-signup/email-signup.component';
import { CourseRedirectComponent } from './views/courses/components/course-redirect/course-redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CoursesComponent,
    EmailSignupComponent,
    CourseRedirectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
