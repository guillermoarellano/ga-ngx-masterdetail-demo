import { Component, OnInit } from '@angular/core';

import { ReposService } from '../shared/repos.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {
  repos: any[];
  selectedRepo: string = "";
  errorMessage: string = "";

  constructor(private _reposService: ReposService) { }

  ngOnInit() {
    this.getReposFromService();
  }

  handleSelectedRepo(repo_name: string) {
    this.selectedRepo = repo_name;
    console.log(this.selectedRepo);
  }

  private getReposFromService() {
    this._reposService.getRepos().subscribe(
      data => this.repos = data,
      error => this.errorMessage = <any>error);
  }
}
