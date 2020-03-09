import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchbComponent } from './lunchb.component';

describe('LunchbComponent', () => {
  let component: LunchbComponent;
  let fixture: ComponentFixture<LunchbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
