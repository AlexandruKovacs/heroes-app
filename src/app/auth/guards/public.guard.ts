import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class PublicGuard implements CanMatch, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAuth()
      .pipe(
        tap( isAuth => console.log('isAuth', isAuth)),
        tap( isAuth => {
          if( isAuth ) {
            this.router.navigate(['./heroes/list']);
          }
        }),
        map( isAuth => !isAuth ),
      )
  }


  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    // console.log('canMatch');
    // console.log(route, segments);

    return this.checkAuthStatus();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    // console.log('canActivate');
    // console.log(route, state);

    return this.checkAuthStatus();
  }

}
