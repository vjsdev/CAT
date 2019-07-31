import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CatCoreModule } from "./cat-core/cat-core.module";
import { CatAdminDashboardComponent } from "./cat-admin-dashboard/cat-admin-dashboard.component";

import {
  MatSlideToggleModule,
  MatSelectModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { AssignrolesComponent } from "./assignroles/assignroles.component";

//import { MatSelectModule } from "@angular/material/select";
@NgModule({
  declarations: [
    AppComponent,
    CatAdminDashboardComponent,
    AssignrolesComponent
  ],
  imports: [
    BrowserModule,
    CatCoreModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
