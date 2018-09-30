import { Component } from "@angular/core";
import { TimeSlot } from "projects/toxic-schedule/src/lib/models/time-slot.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  interval: number;
  startTime: Date;
  endTime: Date;
  reservedSlots: TimeSlot[];
  sectors: String[];

  constructor() {
    this.interval = 15;
    this.startTime = new Date("2018-09-20T10:00:00.000");
    this.endTime = new Date("2018-09-20T13:00:00.000");

    this.sectors = ["Anakin Skywalker", "Chewbacca", "Han Solo", "Leia Organa"];

    this.reservedSlots = [
      new TimeSlot(
        "2018-09-20T10:30:00",
        "2018-09-20T10:44:59",
        "Anakin Skywalker",
        "Dentist",
        1
      ),
      new TimeSlot(
        "2018-09-20T10:45:00",
        "2018-09-20T10:59:59",
        "Anakin Skywalker",
        "Meeting with Joe",
        2
      ),
      new TimeSlot(
        "2018-09-20T11:30:00",
        "2018-09-20T11:59:59",
        "Anakin Skywalker",
        "Call Adam",
        3
      ),
      new TimeSlot(
        "2018-09-20T10:00:00",
        "2018-09-20T10:29:59",
        "Chewbacca",
        "Board meeting",
        4
      ),
      new TimeSlot(
        "2018-09-20T10:45:00",
        "2018-09-20T11:14:59",
        "Han Solo",
        "Dentist",
        5
      ),
      new TimeSlot(
        "2018-09-20T11:45:00",
        "2018-09-20T12:29:59",
        "Leia Organa",
        "Kids/Lunch",
        6
      )
    ];
  }

  getSelectedTime($event) {
    console.log("Selected slot:", $event);
  }
}
