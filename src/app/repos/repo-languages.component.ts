import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ReposService } from '../shared/repos.service';

@Component({
  selector: 'app-repo-languages',
  templateUrl: './repo-languages.component.html',
  styleUrls: ['./repo-languages.component.scss']
})
export class RepoLanguagesComponent implements OnChanges {
  codingLanguages: any[];
  errorMessage: string = "";
  @Input() repoName: string;
  
  constructor(private _reposService: ReposService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['repoName']){
      console.log(`RepoLanguagesComponent is triggered. The value of local repoName is ${this.repoName}`);
    }
  }

  getCodeLanguagesFromService() {
    this._reposService.getRepoLanguages('bike-navigation').subscribe(
      data => this.codingLanguages = data,
      error => this.errorMessage = <any>error);
  }
}
