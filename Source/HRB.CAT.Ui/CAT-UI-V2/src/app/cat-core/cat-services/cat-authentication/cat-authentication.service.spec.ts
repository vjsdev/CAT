import { TestBed } from '@angular/core/testing';

import { CatAuthenticationService } from './cat-authentication.service';

describe('CatAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatAuthenticationService = TestBed.get(CatAuthenticationService);
    expect(service).toBeTruthy();
  });
});
