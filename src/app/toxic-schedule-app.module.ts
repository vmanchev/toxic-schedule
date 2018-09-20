import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToxicScheduleAppComponent } from './toxic-schedule-app.component';
import { ToxicScheduleComponent } from './toxic-schedule/toxic-schedule.component';
import { ToxicScheduleSlotComponent } from './toxic-schedule-slot/toxic-schedule-slot.component';

@NgModule({
  declarations: [
    ToxicScheduleAppComponent,
    ToxicScheduleComponent,
    ToxicScheduleSlotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ToxicScheduleAppComponent]
})
export class ToxicScheduleAppModule { }
