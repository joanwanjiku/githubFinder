import { Injectable } from '@angular/core';
import { User } from '../models/user'
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User
  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<User>{
    return this.http.get<User>(environment.userUrl);
  }
 
}
