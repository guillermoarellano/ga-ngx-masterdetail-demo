import { Component, Input } from '@angular/core';

import { ReposService } from '../shared/repos.service';

@Component({
  selector: 'app-repo-languages',
  templateUrl: './repo-languages.component.html',
  styleUrls: ['./repo-languages.component.scss']
})
export class RepoLanguagesComponent {
  codingLanguages: any[];
  errorMessage: string = "";
  @Input() repoName: string;
  
  constructor(private _reposService: ReposService) { }

  getCodeLanguagesFromService() {
    this._reposService.getRepoLanguages('bike-navigation').subscribe(
      data => this.codingLanguages = data,
      error => this.errorMessage = <any>error);
  }
}
