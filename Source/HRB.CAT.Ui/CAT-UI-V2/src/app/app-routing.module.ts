import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatHomeComponent } from './cat-home/cat-home.component';
import { CatAuthGuard } from './cat-core/cat-helpers/cat-auth.guard';
import { CatAdminComponent } from './cat-admin/cat-admin.component';
import { CatLoginComponent } from './cat-login/cat-login.component';
import { Role } from './cat-shared/cat-constants/cat-constant';

const routes: Routes = [
  {
      path: '',
      component: CatHomeComponent,
      canActivate: [CatAuthGuard]
  },
  {
      path: 'admin',
      component: CatAdminComponent,
      canActivate: [CatAuthGuard],
      data: { roles: [Role.Admin] }
  },
  {
      path: 'login',
      component: CatLoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
