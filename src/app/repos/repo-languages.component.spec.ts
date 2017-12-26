import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoLanguagesComponent } from './repo-languages.component';

describe('RepoLanguagesComponent', () => {
  let component: RepoLanguagesComponent;
  let fixture: ComponentFixture<RepoLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
