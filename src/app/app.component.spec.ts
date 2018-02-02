// the core modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';

// the necessary modules for component to render
import { 
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

// the component itself and providers
import { AppComponent } from './app.component';
import { SidenavComponent } from './layout/sidenav.component';
import { ReposListComponent } from './repos/repos-list.component';
import { ReposService } from './shared/repos.service';
import { RepoLanguagesComponent } from './repos/repo-languages.component';

describe('AppComponent', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidenavComponent,
        ReposListComponent,
        RepoLanguagesComponent
      ],
      imports: [ 
        BrowserAnimationsModule,
        HttpClientModule,
        LayoutModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
      ],
      providers: [ 
        ReposService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

});
