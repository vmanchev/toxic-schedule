import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "toxic-schedule-header",
  templateUrl: "./toxic-schedule-header.component.html",
  styleUrls: ["./toxic-schedule-header.component.scss"]
})
export class ToxicScheduleHeaderComponent {
  @Input()
  sectors: string[];
  @Output()
  txSelectedSector = new EventEmitter<String>();

  txSetSector($event) {
    this.txSelectedSector.emit($event.target.value);
  }
}
