import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {
  repos = ["repo_name1", "repo_name2", "repo_name3", "repo_name4", "repo_name5", "repo_name6", "repo_name7", "repo_name8", "repo_name9", "repo_name10"];
  selectedRepo: string = "";
  errorMessage: string = "";

  constructor() { }

  ngOnInit() {
  }

}
