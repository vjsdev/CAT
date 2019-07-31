import { Routes } from '@angular/router';
import { CatDashboardComponent } from 'src/app/cat-dashboard/cat-dashboard.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: CatDashboardComponent },
    { path: 'dashboard/:gua',      component: CatDashboardComponent },
    { path: 'dashboard/:id',      component: CatDashboardComponent }
];
