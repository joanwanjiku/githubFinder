import { Component, OnInit } from '@angular/core';
import {User} from '../models/user'
import {UserService} from '../services/user.service'
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: User
  retrievedUser: User
  word: string= "Click to show Repos... "
  constructor(private http: HttpClient, private router: Router) {
    this.userName = new User("", "",0, "", "", new Date)
   }

  submitUserName(){
     console.log(this.userName['name'])
     this.http.get<User>(`https://api.github.com/users/${this.userName['name']}`).subscribe({
      //  next(response) {console.log(response)}
      next: user => this.retrievedUser = user
     })
   }
   goToRepos(){     
     this.router.navigate(['/repository'], {state: {name: this.userName['name']}})
   }


  ngOnInit(): void {
    
  }

}
