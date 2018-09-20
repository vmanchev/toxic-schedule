import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimeSlot } from '../models/time-slot.model';
import find from 'lodash/find';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'toxic-schedule-slot',
  templateUrl: './toxic-schedule-slot.component.html',
  styleUrls: ['./toxic-schedule-slot.component.scss']
})
export class ToxicScheduleSlotComponent {

  @Input() intervalStart: number;
  @Input() timeSlots: TimeSlot[];
  @Output() selectedSlot = new EventEmitter<TimeSlot>();

  @HostBinding('class') className = 'toxic-schedule-slot';

  getTimeSlot(intervalStart: number): TimeSlot {
    return find(
      this.timeSlots,
      (timeSlot: TimeSlot) =>
        timeSlot.getDateTime().getTime() === intervalStart
    ) || new TimeSlot(intervalStart);
  }

  selectDaySlot(intervalStart: number) {
    this.selectedSlot.emit(this.getTimeSlot(intervalStart));
  }

}
