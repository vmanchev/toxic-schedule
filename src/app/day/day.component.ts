import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { TimeSlot } from '../models/time-slot.model';
import find from 'lodash/find';

@Component({
  selector: 'schedule-day',
  // tslint:disable-next-line:max-line-length
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input() interval: number;
  @Input() startTime: string;
  @Input() endTime: string;
  @Input() timeSlots: TimeSlot[];
  @Output() onSlotSelect = new EventEmitter<TimeSlot>();

  intervals: any[];

  constructor() { }

  ngOnInit() {
    const startDateTime = new Date();
    startDateTime.setHours(parseInt(this.startTime.split(':')[0], 10));
    startDateTime.setMinutes(parseInt(this.startTime.split(':')[1], 10));
    startDateTime.setSeconds(0);

    const endDateTime = new Date();
    endDateTime.setHours(parseInt(this.endTime.split(':')[0], 10));
    endDateTime.setMinutes(parseInt(this.endTime.split(':')[1], 10));
    endDateTime.setSeconds(0);

    const minutes = (endDateTime.getTime() - startDateTime.getTime()) / 60000;

    this.intervals = this.datesRange(1, minutes / this.interval, startDateTime);
  }

  /**
   * Selected time of the day in milliseconds
   * @param appointmentDateTime
   */
  captureSelectedSlot(timeSlot: TimeSlot) {
    this.onSlotSelect.emit(timeSlot);
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
