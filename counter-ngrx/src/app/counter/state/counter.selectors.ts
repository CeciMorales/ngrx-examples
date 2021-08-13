import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from 'src/app/interfaces/CounterState.interface';

// * se pone entre parenteis counter porque es lo que tenemos declarado en module.ts
const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
    return state.channelName;
})