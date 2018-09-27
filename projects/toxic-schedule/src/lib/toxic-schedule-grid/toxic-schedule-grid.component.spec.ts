import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxicScheduleGridComponent } from './toxic-schedule-grid.component';

describe('ToxicScheduleGridComponent', () => {
  let component: ToxicScheduleGridComponent;
  let fixture: ComponentFixture<ToxicScheduleGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToxicScheduleGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxicScheduleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
