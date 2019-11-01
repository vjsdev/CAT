import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/cat-shared/cat-models/cat-user';

@Injectable({
  providedIn: 'root'
})
export class CatAuthenticationService {
  private baseUrl = environment.baseUrl;
  private httpParams = new HttpParams();
  // User Interface
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  authenticateUser(username: string): Observable<any> {
    return this.http
      .get<any>(`http://localhost:50614/api/Authentication`, {
        params: this.httpParams.set('Username', username)
      })
      .pipe(
        tap(
          response => {

            this.handleSuccess(response, 'Authenticate User');
          },
          error => this.handleError(error)
        )
      );
  }
  login(username: string): Observable<IUser> {
    return this.http
      .get<IUser>(`http://localhost:50614/api/User`, {
        params: this.httpParams.set('Username', username)
      })
      .pipe(
        tap(
          user => {
            if (user) { // user && user.token
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
            }
            this.handleSuccess(user, 'Login User');
          },
          error => this.handleError(error)
        )
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private handleSuccess(response: any, methodName: string) {
    return response;
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    return of({ error: { title: 'Error', message: error.message } } as any);
  }
}
