import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/server/users';

  getUsers(){
    return this.http.get<User[]>(this.Url);
  }
  createUser(user:User){
    return this.http.post<User>(this.Url,user);
  }
  getUserId(id:number){
    return this.http.get<User>(this.Url+"/"+id);
  }
  updateUser(user:User){
    return this.http.put<User>(this.Url+"/"+user.id,user);
  }
  deleteUser(user:User){
    return this.http.delete<User>(this.Url+"/"+user.id);
  }
}

