import { Injectable } from '@angular/core';
import {timer, Observable, Subject} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TimerValue {
  hours: number;
  minuts: string;
  ampm: string;
  day: string;
  date: string;
  seconds: string;
}
export class TimerService {
  clock: Observable <Date>;
  infofecha$ = new Subject<TimerValue>();
  vr: TimerValue;
  ampm: string;
  hours: number;
  minute: string;
  weekday: string;
  months: string;
  constructor() {
    this.clock = timer(0,1000).pipe(map(t => new Date()),shareReplay(1));
   }
   getInfoReloj(): Observable<TimerValue>{
     this.clock.subscribe(t => {
      this.hours = t.getHours() % 12;
      this.hours = this.hours ? this.hours : 12;
       this.vr = {
         hours: this.hours,
         minuts: (t.getMinutes() < 10) ? '0' + t.getMinutes() : t.getMinutes().toString(),
         ampm: t.getHours() > 11 ? 'PM' : 'AM',
         day: t.toLocaleString('en-US', { day: '2-digit', month: 'long' }).replace('.', '').replace('-', ' '),
         date: t.toLocaleString('en-US', { weekday: 'long' }).replace('.', ''),
         seconds: t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds().toString()
       }
       this.infofecha$.next(this.vr);
     });
     return this.infofecha$.asObservable();
   }
}