import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { CatDataService } from '../../cat-core/cat-services/cat-data/cat-data.service';
import { IProject } from '../cat-models/cat-project';

@Component({
  selector: 'app-cat-projectlist',
  templateUrl: './cat-projectlist.component.html',
  styleUrls: ['./cat-projectlist.component.css']
})
export class CatProjectlistComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();
  projectList: IProject[];
  @Output() project = new EventEmitter<IProject>();
  constructor(private dataService: CatDataService) { }

  ngOnInit() {
    this.getProjects('vipin.john@hrblock.com');
  }
  showAudit(project: IProject) {
    if (!project) { return; }
    this.project.emit(project);
  }
  getProjects(userid: string) {
    this.dataService
      .getProjects(userid)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        response => {
          this.projectList = response.projects;
          console.log(this.projectList);
        },
        error => {
         console.log(error);
        }
      );
    return;
  }
  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
