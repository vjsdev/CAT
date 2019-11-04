import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatCoreModule } from './cat-core/cat-core.module';
import { CatLoginComponent } from './cat-login/cat-login.component';
import { CatAdminComponent } from './cat-admin/cat-admin.component';
import { CatHomeComponent } from './cat-home/cat-home.component';
import { CatSharedModule } from './cat-shared/cat-shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CatLoginComponent,
    CatAdminComponent,
    CatHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatCoreModule,
    CatSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
