import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 81,
    country: Country.Kazahstan,
    lastname: 'user',
    first: 'name',
    city: 'Moon',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('should get succesfuly', () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test('should return with error from empty first and last name', () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('should return with error from incorrect age', () => {
        const result = validateProfileData({ ...data, age: 5.5 });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('should return with all errors', () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
});
