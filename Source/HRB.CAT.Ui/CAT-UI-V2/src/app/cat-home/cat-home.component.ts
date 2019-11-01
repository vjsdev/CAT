import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatDataService } from '../cat-core/cat-services/cat-data/cat-data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IProject } from '../cat-shared/cat-models/cat-project';
import { IAudit } from '../cat-shared/cat-models/cat-audit';
import { Role, AUDITOR_AUDIT_STATE, REQUESTOR_AUDIT_STATE } from '../cat-shared/cat-constants/cat-constant';

@Component({
  selector: 'app-cat-home',
  templateUrl: './cat-home.component.html',
  styleUrls: ['./cat-home.component.css']
})
export class CatHomeComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();
  project: IProject;
  audits: IAudit[];
  userRole: string;
  error = '';
  auditStates: any;

  constructor(private dataservice: CatDataService) { }

  ngOnInit() {

  }
  getProject(value: IProject) {
    if (!value) { return; }
    this.project = value;
    this.getAudits(value.projectId, 5);
    this.userRole = value.userRole;
    switch (this.userRole) {
      case Role.Auditor:
        this.auditStates = AUDITOR_AUDIT_STATE;
        break;
      case Role.Requestor:
        this.auditStates = REQUESTOR_AUDIT_STATE;
        break;
      case Role.Guest:
        this.auditStates = REQUESTOR_AUDIT_STATE;
        break;
    }
  }

  getAudits(projectId: number, auditCount: number) {
    this.dataservice
      .getAudits(projectId, auditCount)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        response => {
          this.audits = response.audits;
          console.log(response);
        },
        error => {
          console.log(error);
          this.error = error.message;
        }
      );
    return;
  }
  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
