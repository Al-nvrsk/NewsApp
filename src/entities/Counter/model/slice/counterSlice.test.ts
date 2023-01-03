import { CounterShema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('should return value afrter increment', () => {
        const state: CounterShema = {
            value: 3,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 4 });
    });
    test('should return value afrter decrement', () => {
        const state: CounterShema = {
            value: 5,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 4 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
