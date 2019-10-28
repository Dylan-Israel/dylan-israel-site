import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-redirect',
  templateUrl: './course-redirect.component.html',
  styleUrls: ['./course-redirect.component.scss']
})
export class CourseRedirectComponent implements OnInit {
  @Input() public courses: { courseKey: string, urlTitle: string }[] = [];

  constructor(private route: ActivatedRoute) { }

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
    const couponCode = this.getCurrentMonthsCode();

    for (const course of this.courses) {
      if (course.courseKey === courseQueryString) {
        this.redirectByCourse(course.urlTitle, couponCode);
        break;
      }
    }
  }

  private getCurrentMonthsCode(): string {
    const todaysDate = new Date();
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const todaysMonth = months[todaysDate.getMonth()];
    const todaysYear = todaysDate.getUTCFullYear();

    return `${todaysMonth}${todaysYear}`;
  }

  private redirectByCourse(courseName: string, couponCode: string) {
    const base = 'https://www.udemy.com/course';
    const fullUrl = `${base}/${courseName}/?couponCode=${couponCode}`;
    window.location.href = fullUrl;
  }
}
