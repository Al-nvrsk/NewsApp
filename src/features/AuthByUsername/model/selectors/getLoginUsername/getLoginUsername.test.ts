import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return username value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'nimda',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('nimda');
    });
    test('should return empty string with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
