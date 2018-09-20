import { Component } from '@angular/core';
import { TimeSlot } from './models/time-slot.model';

@Component({
  selector: 'toxic-schedule-app-root',
  templateUrl: './toxic-schedule-app.component.html',
  styleUrls: ['./toxic-schedule-app.component.scss']
})
export class ToxicScheduleAppComponent {
  interval: number;
  startTime: Date;
  endTime: Date;
  timeSlots: TimeSlot[];

  constructor() {
    this.interval = 15;
    this.setTimes('startTime', 10, 0);
    this.setTimes('endTime', 17, 0);
    this.timeSlots = [
      new TimeSlot('2018-09-20T11:00', 'Dentist visit'),
      new TimeSlot('2018-09-20T12:30', 'Meeting with my team')
    ];
  }

  private setTimes(prop: string, hour: number, minutes: number) {
    this[prop] = new Date();
    this[prop].setHours(hour);
    this[prop].setMinutes(minutes);
    this[prop].setSeconds(0);
    this[prop].setMilliseconds(0);
  }

  getSelectedTime($event) {
    console.log('Selected slot:', $event);
  }
}
