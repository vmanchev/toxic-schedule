import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import find from 'lodash/find';
import { HostBinding } from '@angular/core';
import { TimeSlot } from '../models/time-slot.model';
import { SlotInterval } from '../models/slot-interval.model';

@Component({
  selector: 'toxic-schedule-slot',
  templateUrl: './toxic-schedule-slot.component.html',
  styleUrls: ['./toxic-schedule-slot.component.scss']
})
export class ToxicScheduleSlotComponent implements OnInit {
  @Input()
  slotInterval: SlotInterval;
  @Input()
  reservedSector: any;
  @Output()
  selectedSlot = new EventEmitter<TimeSlot>();
  @Input()
  sector: String;

  @HostBinding('class')
  className = 'toxic-schedule-slot';

  ngOnInit() {
  }

  selectTimeslot(
    timeSlot: TimeSlot,
    slotInterval: SlotInterval,
    sector: string
  ) {
    if (!timeSlot) {
      timeSlot = new TimeSlot(slotInterval.start, slotInterval.end, sector);
    }

    this.selectedSlot.emit(timeSlot);
  }

  hasAlreadyStarted(timeSlot: TimeSlot) {
    if (!timeSlot) {
      return false;
    }

    return (
      timeSlot.startTime.getTime() < this.slotInterval.start &&
      timeSlot.endTime.getTime() <= this.slotInterval.end
    );
  }
}
