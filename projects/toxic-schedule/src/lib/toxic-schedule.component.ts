import { Component, OnInit, EventEmitter, HostListener, DoCheck } from "@angular/core";
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { TimeSlot } from "./models/time-slot.model";
import { SlotInterval } from "./models/slot-interval.model";

@Component({
  selector: "toxic-schedule",
  templateUrl: "./toxic-schedule.component.html",
  styleUrls: ["./toxic-schedule.component.scss"]
})
export class ToxicScheduleComponent implements DoCheck {
  @Input()
  interval: number;
  @Input()
  startTime: Date;
  @Input()
  endTime: Date;
  @Input()
  reservedSlots: TimeSlot[];
  @Input()
  sectors: string[];
  @Output()
  slotSelected = new EventEmitter<TimeSlot>();

  /**
   * Sector, selected via dropdown on smaller screen resolutions
   */
  txSector: string;

  slotIntervals: SlotInterval[];

  private sectorSource: string[];

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth >= 576) {
      this.sectorSource = this.sectors;
    } else {
      this.sectorSource = this.txSector ? [this.txSector] : [this.sectors[0]];
    }
  }

  ngDoCheck() {

    // total minuites in the entire time frame
    const minutes = (this.endTime.getTime() - this.startTime.getTime()) / 60000;

    this.slotIntervals = this.datesRange(
      0,
      Math.ceil(minutes / this.interval),
      this.startTime
    );

    this.sectors = this.sectors.sort();
    this.onResize({
      target: {
        innerWidth: window.innerWidth
      }
    });
  }

  /**
   * Generate a list of time slot intervals
   *
   * For a given start date, number to start from and
   * total number of slots, generate a list of equal SlotInterval's
   * @param startIndex number
   * @param endIndex number
   * @param startDateTime Date
   */
  private datesRange(
    startIndex: number,
    endIndex: number,
    startDateTime: Date
  ): SlotInterval[] {
    return new Array(endIndex).fill(undefined).map((_, i) => {
      const start = new Date(
        startDateTime.getTime() + (i + startIndex) * this.interval * 60000
      );
      start.setSeconds(0);
      start.setMilliseconds(0);

      return {
        start: start.getTime(),
        end: start.getTime() + this.interval * 60000 - 1000
      } as SlotInterval;
    });
  }

  /**
   * Emit the selected time slot outside the component
   * @param timeSlot
   */
  selectTimeslot(timeSlot: TimeSlot) {
    this.slotSelected.emit(timeSlot);
  }

  txDisplaySector(txSelectedSector) {
    this.txSector = txSelectedSector;
  }

  getSectors() {
    // const a = this.txSector ? [this.txSector] : this.sectors;
    this.onResize({
      target: {
        innerWidth: window.innerWidth
      }
    });

    return this.sectorSource;
  }
}
