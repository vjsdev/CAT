import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatCoreModule } from './cat-core/cat-core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
