import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatProjectlistComponent } from './cat-projectlist.component';

describe('CatProjectlistComponent', () => {
  let component: CatProjectlistComponent;
  let fixture: ComponentFixture<CatProjectlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatProjectlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatProjectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
