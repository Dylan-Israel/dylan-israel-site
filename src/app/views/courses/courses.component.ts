import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  public courses: { courseKey: string, urlTitle: string }[] = [
    { courseKey: 'javascript', urlTitle: 'javascript-360' },
    { courseKey: 'fe-interview', urlTitle: '100-front-end-interview-questions-challenge' },
    { courseKey: '100-algorithms', urlTitle: '100-algorithms-challenge' }
  ];
}
