# Toxic Schedule component

Render time slots for appointments.

## Usage

```
<toxic-schedule 
    [interval]="15" 
    [startTime]="'07:00'" 
    [endTime]="'19:00'" 
    [timeSlots]="timeSlots"
    (slotSelected)="getSelectedTime($event)">
</toxic-schedule>
```
