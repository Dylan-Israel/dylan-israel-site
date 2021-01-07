import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    if (environment.production) {
      const styles = 'font-size: 1.25em; font-weight: bold; padding: 5px;'
      console.group(`%c👨‍💻 Hi, I'm Dylan C. Israel and Thanks for checking out my Portfolio!`, styles);
      console.log('%c📺 YouTube - https://www.YouTube.com/CodingTutorials360', styles);
      console.log('%c🎙️ Podcast - https://www.SelfTaughtOrNot.com', styles);
      console.log('%c🐦Twitter - https://twitter.com/PizzaPokerGuy', styles);
      console.log('%c📁 Github - https://github.com/pizzapokerguy', styles);
      console.log('%c📝 LinkedIn - https://www.linkedin.com/in/dylan310/', styles);
      console.log('%c📧 Email - DylansEmail310@gmail.com', styles);
      console.groupEnd();
    }
  }

}
