import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/counter/state/counter.actions';
import { CounterService } from '../../../services/counter/counter.service';
import { CounterState } from '../../../interfaces/CounterState.interface';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  constructor(
    public counterService: CounterService,
    // initial state se setea
    public store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.increment.emit();
    this.counterService.onIncrement();
    // para llamar a una acción se usa el dispatch
    this.store.dispatch(increment());

  }

  onDecrement() {
    this.decrement.emit();
    this.counterService.onDecrement();
    this.store.dispatch(decrement());

  }

  onReset() {
    this.reset.emit();
    this.counterService.onReset();
    this.store.dispatch(reset());

  }

}
