import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileisLoading } from './getProfileisLoading';

describe('getProfileisLoading.test', () => {
    test('should return isLoading value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileisLoading(state as StateSchema)).toEqual(true);
    });
    test('should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileisLoading(state as StateSchema)).toEqual(undefined);
    });
});
