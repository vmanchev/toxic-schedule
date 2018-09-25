import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { TimeSlot } from '../models/time-slot.model';
import map from 'lodash/map';
import filter from 'lodash/filter';
import uniq from 'lodash/uniq';
import find from 'lodash/find';
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

  sharePerSlot: number;

  slotIntervals: SlotInterval[];

  constructor() { }

  ngOnInit() {
    const minutes = (this.endTime.getTime() - this.startTime.getTime()) / 60000;

    this.slotIntervals = this.datesRange(
      0,
      minutes / this.interval,
      this.startTime
    );

    // this.sharePerSlot = (1/this.slotIntervals.length)*100;

    console.log(this.reservedSlots, this.sharePerSlot)
  }

  getSectors(): String[] {
    return uniq(map(this.reservedSlots, 'sector')).sort();
  }

  getReservedSlotsPerSector(sector: string) {
    return filter(this.reservedSlots, {sector: sector});
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
    return new Array(endIndex).fill(undefined).map((_, i) => {
      const start = new Date(
        startDateTime.getTime() + (i + startIndex) * this.interval * 60000
      );
      start.setSeconds(0);
      start.setMilliseconds(0);

      const end = start.getTime() + this.interval * 60000 - 1000;

      return {
        start: start.getTime(),
        end: end
      };
    });
  }

  selectTimeslot(
    timeSlot: TimeSlot,
    slotInterval: SlotInterval,
    sector: string
  ) {
    if (!timeSlot) {
      timeSlot = new TimeSlot(slotInterval.start, slotInterval.end, sector);
    }

    console.log(timeSlot)
  }
}
