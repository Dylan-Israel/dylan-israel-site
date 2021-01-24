export class GithubInfo {
  public followers: number;
  public profilePage: string;
  public public_repos: number;

  constructor(data: any = {}) {
    this.followers = data.followers || 0;
    this.public_repos = data.public_repos || 0;
    this.profilePage = data.html_url || '';
  }

}
