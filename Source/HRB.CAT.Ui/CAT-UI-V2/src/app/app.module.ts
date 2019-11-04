import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatCoreModule } from './cat-core/cat-core.module';
import { CatLoginComponent } from './cat-login/cat-login.component';
import { CatAdminComponent } from './cat-admin/cat-admin.component';
import { CatHomeComponent } from './cat-home/cat-home.component';
import { CatSharedModule } from './cat-shared/cat-shared.module';
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';

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
    CatSharedModule,
    MsAdalAngular6Module.forRoot({
      tenant: '3ec4eda1-a5d1-433d-90da-8dc791283d95', // HRB Tenant
      clientId: 'ce9e6345-c504-4cd5-9003-12cff3f6ee18', // EmgGame ID
      authority: 'https://login.microsoftonline.com/3ec4eda1-a5d1-433d-90da-8dc791283d95',
      cacheLocation: 'sessionStorage',
      postLogoutRedirectUri: 'localhost:4200',
      navigateToLoginRequestUrl: true,
    })
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
