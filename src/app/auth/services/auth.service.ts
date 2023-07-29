import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environment/environment';
import { User } from '../interfaces/user.interface';

import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = environment.baseURL;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {

    if(!this.user) {
      return undefined;
    }

    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {
    // http.post('login', {email, password})

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap( user => this.user = user),
        tap( user => localStorage.setItem('token', 'sbdbxfge534yhd.asdhbgasgda.asfg' )),
      );
  }

  checkAuth(): Observable<boolean> {

    if(!localStorage.getItem('token')) {
      return of(false);
    }

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${ this.baseUrl }/users/1`)
      .pipe(
        tap( user => this.user = user ),
        map( user => !!user ),
        catchError( error => of(false) ),
      );
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
  }

}
