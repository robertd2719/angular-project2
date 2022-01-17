import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs'
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // In order to use the service we need to import it as a private variable into our constructor
  // in this case we are using the HttpClient type with a parameter of HttpClient
  constructor(private http: HttpClient) { }
  // we can pass our string here so we don't have to do it all the time
  //https://jsonplaceholder.typicode.com/users

  url:string = environment.apiUrl;

  // our getusers is going to return an array of observable users
  // we also need to remember to pass types for the user to return from
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/users`);
  }

  getUser(): Observable<User>{
    return this.http.get<User>(`${this.url}/users/1`);
  }

  createUser(user:User): Observable<User>{
    return this.http.post<User>(`${this.url}/users`,user)
  }

  // We need only specify the return type(Observable<user>) and make sure to pass the user
  // as the payload.
  updateUser(user:User): Observable<User>{
    return this.http.put<User>(`${this.url}/users/${user.id}`,user)
  }
}
