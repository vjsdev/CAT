import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFooterComponent } from './cat-footer.component';

describe('CatFooterComponent', () => {
  let component: CatFooterComponent;
  let fixture: ComponentFixture<CatFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
