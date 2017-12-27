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
    if (changes['repoName'] && (this.repoName !== null && this.repoName !== undefined)){
      this.getCodeLanguagesFromService();
    }
  }

  getCodeLanguagesFromService() {
    this._reposService.getRepoLanguages(this.repoName).subscribe(
      data => this.codingLanguages = data,
      error => this.errorMessage = <any>error);
  }
}
