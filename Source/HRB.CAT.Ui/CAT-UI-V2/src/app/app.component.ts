import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatAuthenticationService } from './cat-core/cat-services/cat-authentication/cat-authentication.service';
import { IUser } from './cat-shared/cat-models/cat-user';
import {  Role } from './cat-shared/cat-constants/cat-constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CAT-UI-V2';
  currentUser: IUser;

    constructor(
        private router: Router,
        private authenticationService: CatAuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        // return this.currentUser && this.currentUser.role === Role.Admin;
        return this.currentUser && this.currentUser.isAdmin === true;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
