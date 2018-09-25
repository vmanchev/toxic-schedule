import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimeSlot } from '../models/time-slot.model';

@Component({
  selector: 'toxic-schedule-appointment',
  templateUrl: './toxic-schedule-appointment.component.html',
  styleUrls: ['./toxic-schedule-appointment.component.scss']
})
export class ToxicScheduleAppointmentComponent implements OnInit {

  @Input() reservedSlot: TimeSlot;
  @Input() scheduleStartTime: Date;
  @Input() scheduleEndTime: Date;
  @Output()

  relativeStart: number;
  relativeEnd: number;

  ngOnInit() {
    this.relativeStart = (this.reservedSlot.startTime.getTime() - this.scheduleStartTime.getTime()) / (this.scheduleEndTime.getTime() - this.scheduleStartTime.getTime()) * 100;
    this.relativeEnd = (this.reservedSlot.endTime.getTime() - this.reservedSlot.startTime.getTime()) / (this.scheduleEndTime.getTime() - this.scheduleStartTime.getTime()) * 100;
  }


}
