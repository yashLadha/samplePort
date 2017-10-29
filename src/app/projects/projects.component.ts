import { Component, OnInit } from '@angular/core';
import Github from 'github-api';
import { Repo } from '../shared/Repo';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  repoList: any;

  constructor() { }

  ngOnInit() {
    this.getRepos();
  }

  getRepos() {
    const gh = new Github();
    const user = gh.getUser('yashLadha');

    const num = user.listRepos((err, res, req) => {
      const repos = res;
      for (const item of repos) {
        console.log(item);
      }
      this.repoList = res;
    });

  }

}
