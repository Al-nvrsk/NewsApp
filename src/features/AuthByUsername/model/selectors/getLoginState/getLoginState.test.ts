import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return login state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'nimda',
                password: '321',
                isLoading: true,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual(state.loginForm);
    });
});
