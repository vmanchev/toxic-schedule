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
  reservedSlots: TimeSlot[];
  sectors: String[];

  constructor() {
    this.interval = 15;
    this.startTime = new Date('2018-09-20T10:00:00.000');
    this.endTime = new Date('2018-09-20T16:00:00.000');

    this.sectors = [
      'д-р. Маждаров',
      'д-р. Ангелов',
      'д-р. Петров',
      'д-р. Стоянов'
    ];

    this.reservedSlots = [
      new TimeSlot(
        '2018-09-20T10:30:00',
        '2018-09-20T10:44:59',
        'д-р. Маждаров',
        'ваксина за котка',
        1
      ),
      new TimeSlot(
        '2018-09-20T10:45:00',
        '2018-09-20T10:59:59',
        'д-р. Маждаров',
        'ваксина за куче',
        2
      ),
      new TimeSlot(
        '2018-09-20T11:30:00',
        '2018-09-20T11:59:59',
        'д-р. Маждаров',
        'операция',
        3
      ),
      new TimeSlot(
        '2018-09-20T10:45:00',
        '2018-09-20T11:14:59',
        'д-р. Ангелов',
        'обезпаразитяване',
        4
      ),
      new TimeSlot(
        '2018-09-20T10:45:00',
        '2018-09-20T11:14:59',
        'д-р. Петров',
        'обезпаразитяване',
        5
      ),
      new TimeSlot(
        '2018-09-20T10:45:00',
        '2018-09-20T11:14:59',
        'д-р. Стоянов',
        'обезпаразитяване',
        6
      )
    ];
  }

  getSelectedTime($event) {
    console.log('Selected slot:', $event);
  }
}
