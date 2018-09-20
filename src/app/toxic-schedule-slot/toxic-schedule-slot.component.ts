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
  reservedSlots: TimeSlot[];
  @Output()
  selectedSlot = new EventEmitter<TimeSlot>();
  @Input()
  sectors: String[];

  @HostBinding('class')
  className = 'toxic-schedule-slot';

  ngOnInit() {}

  getTimeslot(slotInterval: SlotInterval, sector: string): TimeSlot {
    return (
      find(
        this.reservedSlots,
        (timeSlot: TimeSlot) =>
        timeSlot.startTime.getTime() === slotInterval.start && timeSlot.sector === sector
      ) || new TimeSlot(slotInterval.start, slotInterval.end, sector)
    );
  }

  selectTimeslot(slotInterval: SlotInterval, sector: string) {
    this.selectedSlot.emit(this.getTimeslot(slotInterval, sector));
  }
}
