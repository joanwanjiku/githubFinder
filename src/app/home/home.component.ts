 import { Component, OnInit } from '@angular/core';
import {User} from '../models/user'
import {UserService} from '../services/user.service'
import {RepositoryService} from '../services/repository.service'
import {Repository} from '../models/repository'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User
  repos: Repository[]

  constructor(private userService: UserService, private repoService: RepositoryService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe({
      // user => this.currentUser = user,
      next: user => this.currentUser = user
      // next(user) {console.log(user)}
    })
    this.repoService.getUserRepos().subscribe({
      next: repos => this.repos = repos
      // next(repos) {console.log(repos)}
    })
  }

}
