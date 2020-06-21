import { Component, OnInit, Input } from '@angular/core';
import {RepositoryService} from '../services/repository.service';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import {HttpClient} from '@angular/common/http'

import { User } from '../models/user';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repos: Repository[];
  constructor(private repositoryService: RepositoryService, private route: ActivatedRoute,private http: HttpClient ) { }



  ngOnInit(): void {
    // console.log(history.state.name)
    this.http.get<Repository[]>(`https://api.github.com/users/${history.state.name}/repos`).subscribe({
      //  next(response) {console.log(response)}
      next: repo => this.repos = repo
     })
  }

}
