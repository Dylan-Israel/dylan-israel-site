import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CoursesComponent } from './views/courses/courses.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  }
];
