import { Component } from '@angular/core';
import { Course } from '../types/interfaces/course.interface';
import { CouponCodeService } from './services/coupon-code/coupon-code.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  public courses: Course[] = [];
  public currentMonthsCode = this.couponCodeService.currentCode;

  constructor(private couponCodeService: CouponCodeService) {
    this.courses = this.couponCodeService.courses;
  }

}
