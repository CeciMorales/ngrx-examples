import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from 'src/app/counter/state/counter.actions';
import { getChannelName } from 'src/app/counter/state/counter.selectors';
import { CounterState } from 'src/app/interfaces/CounterState.interface';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.scss']
})
export class CounterCustomInputComponent implements OnInit {

  value: number = 0;
  channelName: string = '';
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    // ! sin selector -> this.store.select('counter')
    this.store.select(getChannelName).subscribe( channelName => {
      console.log('channel name observable called')
      this.channelName = channelName;
    })
  }

  onAdd() {
    // dispatch action
    //console.log(this.value);
    this.store.dispatch(customIncrement({value: this.value}));
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }

}
