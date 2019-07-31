import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignrolesComponent } from './assignroles.component';

describe('AssignrolesComponent', () => {
  let component: AssignrolesComponent;
  let fixture: ComponentFixture<AssignrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
