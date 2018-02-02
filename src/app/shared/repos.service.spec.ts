// the core modules
import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { ReposService } from './repos.service';

describe('ReposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [ReposService]
    });
  });

  it('should be created', inject([ReposService], (service: ReposService) => {
    expect(service).toBeTruthy();
  }));
});
