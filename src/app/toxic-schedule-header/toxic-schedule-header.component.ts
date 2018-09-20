import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toxic-schedule-header',
  templateUrl: './toxic-schedule-header.component.html',
  styleUrls: ['./toxic-schedule-header.component.scss']
})
export class ToxicScheduleHeaderComponent implements OnInit {
  @Input()
  sectors: string[];

  constructor() {}

  ngOnInit() {
  }
}
