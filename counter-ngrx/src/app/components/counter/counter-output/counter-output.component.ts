import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {CounterService} from '../../../services/counter/counter.service';
import { CounterState } from '../../../interfaces/CounterState.interface';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from 'src/app/counter/state/counter.selectors';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  @Input() counter: number = 0;
  counterS: number = 0;
  counterStore: number = 0;

  counterSubscription: Subscription = new Subscription;
  counter$: Observable<{counter: number}> = new Observable();
  
  constructor(
    public counterService: CounterService,
    // * {counter: {misma estructurea que tienes en counter state}}
    public store: Store<{counter: CounterState }>) { }


  ngOnInit(): void {
    this.getCounterService();
    this.getCounterStore();
    

  }

  getCounterService() {
    this.counterService.getCounter$().subscribe(counter => 
      this.counterS = counter
    )
    console.log('conuter service', this.counterS);

  }

  getCounterStore() {
    // devuelve un observable
    this.counterSubscription = this.store
      .select(getCounter)
      .subscribe( counter => {
        console.log('counter observable called')
        // counter store toma numero
        this.counterStore = counter;
    });

    // counter$ toma observable
    this.counter$ = this.store.select('counter')!;
  }

  ngOnDestroy(): void {

    // ! si usas observable, counter$, ya no tienes que hacer el destroy
    // si existe una suscripción  a counter...
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
