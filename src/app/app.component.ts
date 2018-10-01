import { Component } from '@angular/core';
import { TimeSlot } from 'projects/toxic-schedule/src/lib/models/time-slot.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  interval: number;
  startTime: Date;
  endTime: Date;
  reservedSlots: TimeSlot[];
  sectors: String[];

  constructor() {
    this.interval = 5;
    this.startTime = new Date('2018-09-20T10:00:00.000');
    this.endTime = new Date('2018-09-20T13:00:00.000');

    this.sectors = ['Anakin Skywalker', 'Chewbacca', 'Han Solo', 'Leia Organa'];

    this.reservedSlots = [
      new TimeSlot(
        '2018-09-20T10:30:00',
        '2018-09-20T10:45:00',
        'Anakin Skywalker',
        'Dentist',
        1
      ),
      new TimeSlot(
        '2018-09-20T10:45:00',
        '2018-09-20T11:00:00',
        'Anakin Skywalker',
        'Meeting with Joe',
        2
      ),
      new TimeSlot(
        '2018-09-20T11:30:00',
        '2018-09-20T12:00:00',
        'Anakin Skywalker',
        'Call Adam',
        3
      ),
      new TimeSlot(
        '2018-09-20T10:00:00',
        '2018-09-20T10:30:00',
        'Chewbacca',
        'Board meeting',
        4
      ),
      new TimeSlot(
        '2018-09-20T10:45:00',
        '2018-09-20T11:15:00',
        'Han Solo',
        'Dentist',
        5
      ),
      new TimeSlot(
        '2018-09-20T11:45:00',
        '2018-09-20T12:30:00',
        'Leia Organa',
        'Kids/Lunch',
        6
      )
    ];
  }

  getSelectedTime($event) {
    console.log('Selected slot:', $event);
  }
}
