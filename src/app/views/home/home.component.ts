import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
        public channelStats: any = {};

  public async ngOnInit() {
    this.channelStats = await this.getChannelStats();
  }

  private async getChannelStats() {
    try {
      const response = await fetch(
        'https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=pizzapokerguy87&key=AIzaSyAoLEQd78ITS4e5S1QboQxeLhvC8JQljdg'
      );
      const json = await response.json();
      return json.items[0].statistics;
    } catch (e) {
      return {};
    }
  }
}
