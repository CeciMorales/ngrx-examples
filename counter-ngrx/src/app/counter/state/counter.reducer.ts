import { initialState } from './counter.state';
import { Action, createReducer, on } from "@ngrx/store";
import { changeChannelName, customIncrement, decrement, increment, reset } from './counter.actions';

const _counterReducer = createReducer(
    initialState, 
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }),

    on(decrement, (state) => {
        return {
            ...state, 
            counter: state.counter - 1
        };
    }),

    on(reset, (state) => {
        return {
            ...state, 
            counter: 0
        };
    }),

    on(customIncrement, (state, action) => {
        return{
            ...state, 
            // action tiene valor y type
            counter: state.counter + action.value
        };
    }),

    on(changeChannelName, (state) => {
        return {
            ...state,
            channelName: 'Modified Ceci'
        }
    })

);

export function counterReducer(state = initialState, action: Action) {
    return _counterReducer(state, action);
}