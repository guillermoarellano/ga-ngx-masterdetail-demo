// the core modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

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

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let reposService: ReposService;

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

    // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // ReposService provided to the TestBed
    reposService = TestBed.get(ReposService) ;

  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

});
