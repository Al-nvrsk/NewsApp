import { useTranslation } from 'react-i18next';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '../../model/types/profile';
import { ToggleFeatures } from '@/shared/lib/features';
import { ProfileCardSkeleton } from './version/02/ProfileCardSkeleton/ProfileCardSkeleton';
import { ProfileCard as ProfileCardRedesigned } from './version/02/ProfileCard/ProfileCard';
import { ProfileCard as ProfileCardDeprecated } from './version/01/ProfileCard/ProfileCard';
import { ProfileCardLoader as ProfileCardLoaderDeprecated }
    from './version/01/ProfileCardLoader/ProfileCardLoader';
import { ProfileCardError as ProfileCardErrorDeprecated } from './version/01/ProfileCardError/ProfileCardError';
import { ProfileCardError } from './version/02/ProfileCardError/ProfielCardError';

export interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void

}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        error,
        isLoading,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ProfileCardSkeleton />}
                off={<ProfileCardLoaderDeprecated />}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ProfileCardError />}
                off={<ProfileCardErrorDeprecated />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ProfileCardRedesigned {...otherProps} />}
            off={<ProfileCardDeprecated {...otherProps} />}
        />
    );
};
