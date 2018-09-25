import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxicScheduleAppointmentComponent } from './toxic-schedule-appointment.component';

describe('ToxicScheduleAppointmentComponent', () => {
  let component: ToxicScheduleAppointmentComponent;
  let fixture: ComponentFixture<ToxicScheduleAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToxicScheduleAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxicScheduleAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
