import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/errorConsts';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        first, lastname, age, username,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname || !username) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    return errors;
};
