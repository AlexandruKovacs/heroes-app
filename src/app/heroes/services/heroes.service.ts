import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError(err => of(undefined))
      )
  }

  getSuggestions(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ term }&_limit=6`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${ this.baseUrl }/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {

    if(!hero.id) {
      throw Error('El id no puede ser nulo');
    }

    return this.http.patch<Hero>(`${ this.baseUrl }/heroes/${ hero.id }`, hero);
  }

  deleteHeroById(id: string): Observable<boolean> {
    return this.http.delete(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        map(resp => true),
        catchError(err => of(false)),
      )
  }

}
