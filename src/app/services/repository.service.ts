import { Injectable } from '@angular/core';
import { Repository } from '../models/repository'
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  repos: Repository[]
  private repoUrl = 'https://api.github.com/users/joanwanjiku/repos'
  constructor(private http: HttpClient) { }

  getUserRepos(): Observable<Repository[]>{
    return this.http.get<Repository[]>(this.repoUrl);
  }
}
