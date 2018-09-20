import { Component } from '@angular/core';
import { TimeSlot } from './models/time-slot.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  timeSlots = [
    new TimeSlot('2018-09-20T10:00', 'Dentist visit'),
    new TimeSlot('2018-09-20T16:45', 'Meeting with my team')
  ];

  getSelectedTime($event) {
    console.log('Selected slot:', $event);
  }
}
