import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { TimeSlot } from '../models/time-slot.model';
import map from 'lodash/map';
import uniq from 'lodash/uniq';
import { SlotInterval } from '../models/slot-interval.model';

@Component({
  selector: 'toxic-schedule',
  templateUrl: './toxic-schedule.component.html',
  styleUrls: ['./toxic-schedule.component.scss']
})
export class ToxicScheduleComponent implements OnInit {
  @Input()
  interval: number;
  @Input()
  startTime: Date;
  @Input()
  endTime: Date;
  @Input()
  reservedSlots: TimeSlot[];
  @Output()
  slotSelected = new EventEmitter<TimeSlot>();

  slotIntervals: SlotInterval[];

  constructor() {}

  ngOnInit() {

    const minutes = (this.endTime.getTime() - this.startTime.getTime()) / 60000;

    this.slotIntervals = this.datesRange(
      1,
      minutes / this.interval,
      this.startTime
    );
  }

  getSectors(): String[] {
    return uniq(map(this.reservedSlots, 'sector')).sort();
  }

  /**
   * Selected time of the day in milliseconds
   * @param appointmentDateTime
   */
  captureSelectedSlot(timeSlot: TimeSlot) {
    this.slotSelected.emit(timeSlot);
  }

  private datesRange(
    startIndex: number,
    endIndex: number,
    startDateTime: Date
  ): SlotInterval[] {
    return new Array(endIndex - startIndex + 1).fill(undefined).map((_, i) => {
      const start = new Date(
        startDateTime.getTime() + (i + startIndex) * this.interval * 60000
      );
      start.setSeconds(0);
      start.setMilliseconds(0);

      const end = start.getTime() + this.interval * 60000;

      return {
        start: start.getTime(),
        end: end
      };
    });
  }
}
