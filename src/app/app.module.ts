import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,    
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
