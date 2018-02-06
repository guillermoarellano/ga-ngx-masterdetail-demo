import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { SidenavComponent } from './layout/sidenav.component';
import { ReposListComponent } from './repos/repos-list.component';
import { RepoLanguagesComponent } from './repos/repo-languages.component';

import { ReposService } from './shared/repos.service';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ReposListComponent,
    RepoLanguagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [ ReposService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
