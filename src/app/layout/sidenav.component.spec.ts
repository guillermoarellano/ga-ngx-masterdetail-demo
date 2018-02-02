// the Jasmine libraries
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
import { SidenavComponent } from './sidenav.component';
import { ReposListComponent } from '../repos/repos-list.component';
import { ReposService } from '../shared/repos.service';
import { RepoLanguagesComponent } from '../repos/repo-languages.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
