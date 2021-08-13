import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter: number = 0;
  counter$ = new Subject<number>();

  constructor() { }

  getCounter$(): Observable<number> {
    return this.counter$.asObservable();
  }

  onIncrement() {
    this.counter ++;
    this.counter$.next(this.counter);
  }

  onDecrement() {
    this.counter --;
    this.counter$.next(this.counter);
  }

  onReset() {
    this.counter = 0;
    this.counter$.next(this.counter);
  }
}
