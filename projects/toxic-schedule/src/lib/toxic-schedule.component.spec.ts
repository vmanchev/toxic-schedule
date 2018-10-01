import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxicScheduleComponent } from './toxic-schedule.component';
import { ToxicScheduleHeaderComponent } from './toxic-schedule-header/toxic-schedule-header.component';
import { ToxicScheduleGridComponent } from './toxic-schedule-grid/toxic-schedule-grid.component';

describe('ToxicScheduleComponent', () => {
  let component: ToxicScheduleComponent;
  let fixture: ComponentFixture<ToxicScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToxicScheduleComponent,
        ToxicScheduleHeaderComponent,
        ToxicScheduleGridComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxicScheduleComponent);
    component = fixture.componentInstance;
    component.interval = 5;
    component.startTime = new Date('2018-05-20T10:00:00');
    component.endTime = new Date('2018-05-20T12:00:00');
    component.reservedSlots = [];
    component.sectors = ['sector1', 'sector2'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
