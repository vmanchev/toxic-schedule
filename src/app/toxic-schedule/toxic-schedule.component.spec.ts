import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxicScheduleComponent } from './toxic-schedule.component';

describe('ToxicScheduleComponent', () => {
  let component: ToxicScheduleComponent;
  let fixture: ComponentFixture<ToxicScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToxicScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxicScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
