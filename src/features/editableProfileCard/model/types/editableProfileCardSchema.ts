import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/errorConsts';

export interface EditableProfileCardSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
