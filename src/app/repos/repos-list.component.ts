import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ReposService } from '../shared/repos.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {
  repos: any[];
  @Output() selectedRepo: EventEmitter<string> = new EventEmitter<string>();
  errorMessage: string = "";

  constructor(private _reposService: ReposService) { }

  ngOnInit() {
    this.getReposFromService();
  }

  onSelectedRepo(repo: any) {
    this.selectedRepo.emit(repo.name);
  }

  private getReposFromService() {
    this._reposService.getRepos().subscribe(
      data => this.repos = data,
      error => this.errorMessage = <any>error);
  }
}
