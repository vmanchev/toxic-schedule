import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxicScheduleSlotComponent } from './toxic-schedule-slot.component';

describe('ToxicScheduleSlotComponent', () => {
  let component: ToxicScheduleSlotComponent;
  let fixture: ComponentFixture<ToxicScheduleSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToxicScheduleSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxicScheduleSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
