import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-languages',
  templateUrl: './repo-languages.component.html',
  styleUrls: ['./repo-languages.component.scss']
})
export class RepoLanguagesComponent implements OnInit {
  codingLanguages = ["JavaScript", "HTML", "CSS"];
  errorMessage: string = "";
  @Input() repoName: string;

  constructor() { }

  ngOnInit() {
  }

}
