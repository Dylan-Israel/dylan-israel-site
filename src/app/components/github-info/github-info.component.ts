import { Component, OnInit } from '@angular/core';
import { GithubInfo } from 'src/app/models/github-info.model';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-github-info',
  templateUrl: './github-info.component.html',
  styleUrls: ['./github-info.component.scss']
})
export class GithubComponent implements OnInit {
  public githubInfo: GithubInfo;

  constructor(private githubService: GithubService) { }

  public ngOnInit(): void {
    this.githubService.getMyUser().subscribe({
      next: (data) => {
        this.githubInfo = data;
      }
    });
  }
}
