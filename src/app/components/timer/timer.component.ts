import { Component, OnInit } from '@angular/core';
import { TimerService, TimerValue } from "./timer.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  datos$: Observable<TimerValue>;
  hours: number;
  minuts: string;
  day: string;
  date: string;
  ampm: string;
  seconds: string;
  constructor(private segundo: TimerService) { }
  ngOnInit() {
    this.datos$ = this.segundo.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hours = x.hours;
      this.minuts = x.minuts;
      this.day = x.day;
      this.date = x.date;
      this.ampm = x.ampm;
      this.seconds = x.seconds
    });
  }
}
