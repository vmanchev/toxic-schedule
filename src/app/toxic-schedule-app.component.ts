import { Component } from '@angular/core';
import { TimeSlot } from './models/time-slot.model';

@Component({
  selector: 'toxic-schedule-app-root',
  templateUrl: './toxic-schedule-app.component.html',
  styleUrls: ['./toxic-schedule-app.component.scss']
})
export class ToxicScheduleAppComponent {

  timeSlots = [
    new TimeSlot('2018-09-20T10:00', 'Dentist visit'),
    new TimeSlot('2018-09-20T16:45', 'Meeting with my team')
  ];

  getSelectedTime($event) {
    console.log('Selected slot:', $event);
  }
}
