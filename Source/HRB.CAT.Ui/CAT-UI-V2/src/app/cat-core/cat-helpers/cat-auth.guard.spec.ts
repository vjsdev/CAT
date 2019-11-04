import { TestBed, async, inject } from '@angular/core/testing';

import { CatAuthGuard } from './cat-auth.guard';

describe('CatAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatAuthGuard]
    });
  });

  it('should ...', inject([CatAuthGuard], (guard: CatAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
