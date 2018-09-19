import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'schedule-day',
  // tslint:disable-next-line:max-line-length
  template: '<schedule-slot *ngFor="let timeInterval of intervals" [intervalStart]="timeInterval" (click)="selectAppointmentDateTime(timeInterval)"></schedule-slot>',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() interval: number;
  @Input() startTime: string;
  @Input() endTime: string;
  @Output() selectedTime = new EventEmitter<Date>();

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
  selectAppointmentDateTime(appointmentDateTime: number) {
    this.selectedTime.emit(new Date(appointmentDateTime));
  }

  private datesRange(start, end, startDateTime: Date) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => startDateTime.getTime() + (i + start) * this.interval * 60000);
  }
}
