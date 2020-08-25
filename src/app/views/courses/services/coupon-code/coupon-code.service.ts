import { Injectable } from '@angular/core';
import { Course } from '../../../types/interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CouponCodeService {
  public readonly courses: Course[] = [
    { courseKey: '100-angular', urlTitle: '100-angular-challenge', thumbnailUrl: '/assets/100-angular.jpg' },
    { courseKey: 'fe-interview', urlTitle: '100-front-end-interview-questions-challenge', thumbnailUrl: '/assets/front-end-course.jpg' },
    { courseKey: '100-algorithms', urlTitle: '100-algorithms-challenge', thumbnailUrl: '/assets/100-algorithms.jpg' },
    { courseKey: 'javascript', urlTitle: 'javascript-360', thumbnailUrl: '/assets/javascript-course.jpg' },
  ];
  public readonly currentCode = this.getCurrentMonthsCode();

  constructor() {
    this.courses.forEach((course) => course.url = this.getCouponCode(course));
  }

  public getCouponCode(course: { courseKey: string, urlTitle: string }): string {
    const couponCode = this.getCurrentMonthsCode();
    const base = 'https://www.udemy.com/course';
    const fullUrl = `${base}/${course.urlTitle}/?couponCode=${couponCode}`;

    return fullUrl;
  }


  private getCurrentMonthsCode(): string {
    const todaysDate = new Date();
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const todaysMonth = months[todaysDate.getMonth()];
    const todaysYear = todaysDate.getUTCFullYear();

    return `${todaysMonth}${todaysYear}`;
  }
}
