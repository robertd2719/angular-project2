import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs'
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // In order to use the service we need to import it as a private variable into our constructor
  // in this case we are using the HttpClient type with a parameter of HttpClient
  constructor(private http: HttpClient) { }
  // we can pass our string here so we don't have to do it all the time
  //https://jsonplaceholder.typicode.com/users

  url:string = 'https://jsonplaceholder.typicode.com/users';

  // our getusers is going to return an array of observable users
  // we also need to remember to pass types for the user to return from
  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUsers(): Observable<User>{
    return this.http.get<User>(`${this.url}/1`);
  }
}
