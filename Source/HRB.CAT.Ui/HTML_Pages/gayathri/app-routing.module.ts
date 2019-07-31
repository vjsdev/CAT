import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { CatAdminDashboardComponent } from "./cat-admin-dashboard/cat-admin-dashboard.component";
import { AssignrolesComponent } from "./assignroles/assignroles.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/dashboard/:gua" },
  {
    path: "dashboard",
    loadChildren: "../app/cat-dashboard/cat-dashboard.module#CatDashboardModule"
  },
  {
    path: "dashboard/:gua",
    loadChildren: "../app/cat-dashboard/cat-dashboard.module#CatDashboardModule"
  },
  {
    path: "dashboard/:id",
    loadChildren: "../app/cat-dashboard/cat-dashboard.module#CatDashboardModule"
  },
  { path: "myactivities", component: CatAdminDashboardComponent },
  { path: "assign-roles", component: AssignrolesComponent },
  {
    path: "",
    loadChildren:
      "../app/cat-core/cat-layouts/cat-admin-layout/cat-admin-layout.module#CatAdminLayoutModule"
  },

  { path: "**", pathMatch: "full", redirectTo: "/dashboard/:gua" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
