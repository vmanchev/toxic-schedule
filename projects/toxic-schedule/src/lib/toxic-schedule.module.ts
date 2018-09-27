import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToxicScheduleComponent } from './toxic-schedule.component';
import { ToxicScheduleHeaderComponent } from './toxic-schedule-header/toxic-schedule-header.component';
import { ToxicScheduleGridComponent } from './toxic-schedule-grid/toxic-schedule-grid.component';

@NgModule({
  declarations: [
    ToxicScheduleComponent,
    ToxicScheduleHeaderComponent,
    ToxicScheduleGridComponent
  ],
  imports: [BrowserModule],
  exports: [
    ToxicScheduleComponent,
    ToxicScheduleHeaderComponent,
    ToxicScheduleGridComponent
  ],
  bootstrap: [ToxicScheduleComponent]
})
export class ToxicScheduleModule {}
