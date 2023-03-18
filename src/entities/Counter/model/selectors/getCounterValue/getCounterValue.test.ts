import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should return value as number', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 9 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(9);
    });
});
