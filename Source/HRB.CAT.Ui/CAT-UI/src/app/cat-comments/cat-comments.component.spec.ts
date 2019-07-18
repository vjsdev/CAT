import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCommentsComponent } from './cat-comments.component';

describe('CatCommentsComponent', () => {
  let component: CatCommentsComponent;
  let fixture: ComponentFixture<CatCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
