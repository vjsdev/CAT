import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CatUtilityService } from '../cat-utility/cat-utility.service';
import { IProjectList } from 'src/app/cat-shared/cat-models/cat-project';
import { IAuditList } from 'src/app/cat-shared/cat-models/cat-audit';

@Injectable({
  providedIn: 'root'
})
export class CatDataService {
  private baseUrl = environment.baseUrl;
  private httpParams = new HttpParams();

  constructor(private http: HttpClient) {}

  getAudits(projectId: number, auditCount: number): Observable<IAuditList> {
    const q = projectId.toString();
    const w = auditCount.toString();
    const queryParams: HttpParams = CatUtilityService.buildQueryParams({ProjectId: projectId, AuditCount: auditCount});
    return this.http
      .get<IAuditList>(`http://localhost:50614/api/Audit`, {
        // params: queryParams
        params: this.httpParams.set('ProjectId', q).set('AuditCount', w)
       })
      .pipe(
        tap(
          response => {
            this.handleSuccess(response, 'Audit Project');
          },
          error => this.handleError(error)
        )
      );
  }

  getProjects(userIdentifier: string): Observable<IProjectList> {
    return this.http
      .get<IProjectList>(`http://localhost:50614/api/Project`, {
        params: this.httpParams.set('UserIdentifier', userIdentifier)
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

  private handleSuccess(response: any, methodName: string) {
    return response;
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    return of({ error: { title: 'Error', message: error.message } } as any);
  }
}
