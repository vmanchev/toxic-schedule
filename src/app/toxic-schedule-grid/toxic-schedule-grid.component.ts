import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
import { SlotInterval } from "../models/slot-interval.model";
import { TimeSlot } from "../models/time-slot.model";

@Component({
  selector: "toxic-schedule-grid",
  templateUrl: "./toxic-schedule-grid.component.html",
  styleUrls: ["./toxic-schedule-grid.component.scss"]
})
export class ToxicScheduleGridComponent {
  @Input()
  slotIntervals: SlotInterval[];
  @Input()
  sectors: String[];
  @Input()
  reservedSlots: TimeSlot[];
  @Input()
  startTime: Date;
  @Input()
  endTime: Date;
  @Output()
  cellSelected = new EventEmitter<TimeSlot>();

  @HostBinding('class')
  className = 'toxic-schedule-grid';

  /**
   * Get list of appointments for a sector
   * @param sector
   */
  getReservedSlotsPerSector(sector: string): TimeSlot[] {
    if(!this.reservedSlots) {
      return [];
    }
    return this.reservedSlots.filter((rs: TimeSlot) => rs.sector === sector);
  }

  /**
   * Emits the selected time slot to ToxicSchedule parent component
   * 
   * When the selected time slot is already booked, it will be emitted as is.
   * When the selected time slot is available, a new TimeSlot object will be 
   * created with the selected SlotInterval start and end time, as well as 
   * the sector name.
   * 
   * @param timeSlot TimeSlot
   * @param slotInterval SlotInterval, optional, only for free time slots
   * @param sector string, Sector identifier, optional, only for free time slots
   */
  selectTimeslot(
    timeSlot: TimeSlot,
    slotInterval: SlotInterval,
    sector: string
  ) {
    if (!timeSlot) {
      timeSlot = new TimeSlot(slotInterval.start, slotInterval.end, sector);
    }

    this.cellSelected.emit(timeSlot);
  }

  getRelativeStyle(reservedSlot: TimeSlot) {
    return {
      top: (reservedSlot.startTime.getTime() - this.startTime.getTime()) / (this.endTime.getTime() - this.startTime.getTime()) * 100,
      height: (reservedSlot.endTime.getTime() - reservedSlot.startTime.getTime()) / (this.endTime.getTime() - this.startTime.getTime()) * 100
    }
  }
}
