
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Injectable()
export class InsertAuthTokenInterceptor implements HttpInterceptor {

    private token: string;
    private email: string;
    private userName: string;
    constructor(private adal: MsAdalAngular6Service) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (!this.adal.isAuthenticated) {
            return next.handle(req);
        } else {
            this.token = this.adal.accessToken;
            this.email = this.adal.LoggedInUserEmail;
            this.userName = this.adal.LoggedInUserName;
            this.token = this.token;

            const authorizedRequest = req.clone({
                headers: new HttpHeaders({
                    'Authorization': `bearer ${this.token}`,
                    'Email': `${this.email}`,
                    'UserName': `${this.userName}`,
                })
            });
            return next.handle(authorizedRequest);

        }
    }
}
