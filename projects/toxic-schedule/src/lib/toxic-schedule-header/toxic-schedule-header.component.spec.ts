import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxicScheduleHeaderComponent } from './toxic-schedule-header.component';

describe('ToxicScheduleHeaderComponent', () => {
  let component: ToxicScheduleHeaderComponent;
  let fixture: ComponentFixture<ToxicScheduleHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToxicScheduleHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxicScheduleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
