// the core modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// the necessary modules for component to render
import { 
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

// the component itself and providers
import { SidenavComponent } from '../layout/sidenav.component';
import { ReposListComponent } from './repos-list.component';
import { ReposService } from '../shared/repos.service';
import { RepoLanguagesComponent } from '../repos/repo-languages.component';

describe('ReposListComponent', () => {
  let component: ReposListComponent;
  let fixture: ComponentFixture<ReposListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ReposListComponent,
        SidenavComponent,
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
