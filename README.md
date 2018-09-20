# Toxic Schedule component

Angular 6 module, rendering time slots for appointments.

![Screenshot](docs/toxic-schedule.png)

## Usage

```
<toxic-schedule 
    [interval]="15" 
    [startTime]="startTime" 
    [endTime]="endTime" 
    [reservedSlots]="reservedSlots"
    (slotSelected)="getSelectedTime($event)">
</toxic-schedule>
```

- **interval** - number, slot intervals in minutes
- **startTime** - Date object, representing the schedule start time
- **endTime** - Date object, representing the schedule end time
- **reservedSlots** - list of predefined time slots, which should be displayed in the schedule
- **slotSelected** - event, which will be emittted when a slot is selected. TimeSlot model 
will be passed, eigther empty or one of the preselected.

## TimeSlot model

```
const timeSlot = new TimeSlot(startTime, endTime, sector, [description]);
```

- **startTime** - Slot start date/time. Date, string or milliseconds.
- **endTime** - Slot start date/time. Date, string or milliseconds.
- **sector** - Sector name, string.
- **description** - Optional, plain text description for this time slot. 
