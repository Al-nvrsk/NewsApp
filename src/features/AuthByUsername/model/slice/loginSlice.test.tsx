import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('should set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123'),
        )).toEqual({ username: '123' });
    });
    test('should set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '321' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'),
        )).toEqual({ password: '123' });
    });
});
