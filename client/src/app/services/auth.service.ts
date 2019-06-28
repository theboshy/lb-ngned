import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UserInterface } from '../models/user-interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private htttp: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  /*this.user.lastName,this.user.name,this.user.isMilitar,this.user.isTemporal
  /,this.user.username,this.user.email,this.user.password*/
  registerUser(
    LastName: string,
    Name: string,
    isMilitar: string,
    isTemporal: string,
    username: string,
    email: string,
    password: string
  ) {
    const url_api = 'http://localhost:3000/api/app-user-tbs';
    return this.htttp
      .post<UserInterface>(
        url_api,
        {
            id : Math.floor(Math.random() * 20).toString(),
            LastName: LastName,
            Name: Name,
            isMilitar: isMilitar,
            isTemporal: isTemporal,
            username: username,
            email: email,
            password: password,
            timeCreated : new Date()
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }
}
