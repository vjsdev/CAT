import { TestBed } from '@angular/core/testing';

import { CatUtilityService } from './cat-utility.service';

describe('CatUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatUtilityService = TestBed.get(CatUtilityService);
    expect(service).toBeTruthy();
  });
});
