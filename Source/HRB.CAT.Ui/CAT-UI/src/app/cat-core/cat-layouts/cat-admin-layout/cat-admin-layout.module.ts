import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './cat-admin-layout.routing';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import { CatDashboardComponent } from 'src/app/cat-dashboard/cat-dashboard.component';
import { CatSharedModule } from 'src/app/cat-shared/cat-shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CatRatingsComponent } from 'src/app/cat-dashboard/cat-ratings/cat-ratings.component';
import { CatObservationsComponent } from 'src/app/cat-dashboard/cat-observations/cat-observations.component';
import { CatCommentsComponent } from 'src/app/cat-dashboard/cat-comments/cat-comments.component';
@NgModule({
  imports: [
    CatSharedModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CatDashboardComponent,
    CatRatingsComponent,
    CatObservationsComponent,
    CatCommentsComponent
  ]
})

export class CatAdminLayoutModule {}
