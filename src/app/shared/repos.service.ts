import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ReposService {
  private _heremapsGithubReposUrl = 'https://api.github.com/users/heremaps/repos';
  private _heremapsGithubRepoLangUrl = 'https://api.github.com/repos/heremaps'; //append /:repo_name/languages to Url

  constructor(private _http: HttpClient) { }

  getRepos() {
    return this._http.get(this._heremapsGithubReposUrl)
      .catch(this.handleError);
  }

  getRepoLanguages(repoName: string) {
    const repoLanguagesAPIUrl = `${this._heremapsGithubRepoLangUrl}/${repoName}/languages`;

    console.log(repoLanguagesAPIUrl);
    return this._http.get(repoLanguagesAPIUrl)
      .map((response) => Object.keys(response))
      .catch(this.handleError);
  }
  
  private handleError(err: HttpErrorResponse) {
    let errorMsg = '';

    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMsg = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMsg = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }

}
