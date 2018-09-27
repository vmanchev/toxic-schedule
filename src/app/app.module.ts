import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ToxicScheduleModule } from "projects/toxic-schedule/src/lib/toxic-schedule.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ToxicScheduleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
