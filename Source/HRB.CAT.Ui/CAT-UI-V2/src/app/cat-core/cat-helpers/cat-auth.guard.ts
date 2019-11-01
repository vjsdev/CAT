import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CatAuthenticationService } from '../cat-services/cat-authentication/cat-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CatAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: CatAuthenticationService
    ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser) {
          // check if route is restricted by role
          let role = '';
          if (currentUser.isAdmin || currentUser.isManager) {
            role = 'Admin';
          }
          if (next.data.roles && next.data.roles.indexOf(role) === -1) {
              // role not authorised so redirect to home page
              this.router.navigate(['/']);
              return false;
          }

          // authorised so return true
          return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
  }

}
