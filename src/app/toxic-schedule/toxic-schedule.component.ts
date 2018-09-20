import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { TimeSlot } from '../models/time-slot.model';
import find from 'lodash/find';

@Component({
  selector: 'toxic-schedule',
  templateUrl: './toxic-schedule.component.html',
  styleUrls: ['./toxic-schedule.component.scss']
})
export class ToxicScheduleComponent implements OnInit {

  @Input() interval: number;
  @Input() startTime: Date;
  @Input() endTime: Date;
  @Input() timeSlots: TimeSlot[];
  @Output() slotSelected = new EventEmitter<TimeSlot>();

  intervals: any[];

  constructor() { }

  ngOnInit() {
    const minutes = (this.endTime.getTime() - this.startTime.getTime()) / 60000;

    this.intervals = this.datesRange(1, minutes / this.interval, this.startTime);
  }

  /**
   * Selected time of the day in milliseconds
   * @param appointmentDateTime
   */
  captureSelectedSlot(timeSlot: TimeSlot) {
    this.slotSelected.emit(timeSlot);
  }

  getAppointment(dateTime: Date) {
    const dt = new Date(dateTime);
    dt.setSeconds(0);
    dt.setMilliseconds(0);

    return find(
      this.timeSlots,
      (timeSlot: TimeSlot) => dt.getTime() === timeSlot.getDateTime().getTime()
    );
  }

  private datesRange(start, end, startDateTime: Date) {
    return (new Array(end - start + 1))
      .fill(undefined)
      .map((_, i) => {
        const d = new Date(startDateTime.getTime() + (i + start) * this.interval * 60000);
        d.setSeconds(0);
        d.setMilliseconds(0);
        return d.getTime();
      });
  }
}
