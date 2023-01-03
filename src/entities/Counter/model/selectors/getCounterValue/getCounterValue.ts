import { createSelector } from '@reduxjs/toolkit';
import { CounterShema } from '../../types/CounterSchema';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(getCounter, (counter: CounterShema) => counter.value);
