import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { GithubInfo } from 'src/app/models/github-info.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  public getMyUser() {
    return this.http.get(`${this.baseUrl}/users/pizzapokerguy`)
      .pipe(map((data) => new GithubInfo(data)));
  }
}
