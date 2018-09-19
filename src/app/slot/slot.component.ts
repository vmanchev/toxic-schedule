import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'schedule-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {

  @Input() intervalStart: number;

  constructor() { }

  ngOnInit() {
  }

}
