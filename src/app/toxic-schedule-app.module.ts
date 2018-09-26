import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToxicScheduleAppComponent } from './toxic-schedule-app.component';
import { ToxicScheduleComponent } from './toxic-schedule/toxic-schedule.component';
import { ToxicScheduleHeaderComponent } from './toxic-schedule-header/toxic-schedule-header.component';
import { ToxicScheduleGridComponent } from './toxic-schedule-grid/toxic-schedule-grid.component';

@NgModule({
  declarations: [
    ToxicScheduleAppComponent,
    ToxicScheduleComponent,
    ToxicScheduleHeaderComponent,
    ToxicScheduleGridComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ToxicScheduleAppComponent]
})
export class ToxicScheduleAppModule {}
