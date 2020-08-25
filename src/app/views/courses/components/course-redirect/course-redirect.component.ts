import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CouponCodeService } from '../../services/coupon-code/coupon-code.service';

@Component({
  selector: 'app-course-redirect',
  templateUrl: './course-redirect.component.html',
  styleUrls: ['./course-redirect.component.scss']
})
export class CourseRedirectComponent implements OnInit {
  public courses: { courseKey: string, urlTitle: string }[] = [];

  constructor(private route: ActivatedRoute, private couponCodeService: CouponCodeService) {
    this.courses = this.couponCodeService.courses;
  }

  public ngOnInit() {
    this.init();
  }

  private init() {
    this.route.root.queryParams.subscribe((params) => {
      const courseQueryString = params.course;

      if (courseQueryString) {
        this.redirectIfValidCourse(courseQueryString);
      }
    });
  }

  public redirectIfValidCourse(courseQueryString: string): void {

    for (const course of this.couponCodeService.courses) {
      if (course.courseKey === courseQueryString) {
        this.redirectByCourse(course);
        break;
      }
    }
  }

  private redirectByCourse(course: { courseKey: string, urlTitle: string, url?: string }) {
    window.location.href = course.url;
  }
}
