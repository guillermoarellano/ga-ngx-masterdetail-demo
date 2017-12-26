import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
