import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { ToxicScheduleModule } from '../../projects/toxic-schedule/src/lib/toxic-schedule.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ToxicScheduleModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
