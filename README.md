# ScheduleCalendar

## Usage

```
<schedule-day 
    [interval]="15" 
    [startTime]="'07:00'" 
    [endTime]="'19:00'" 
    [timeSlots]="timeSlots"
    (onSlotSelect)="getSelectedTime($event)">
</schedule-day>
```
