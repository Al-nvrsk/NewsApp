import { CountrySelect, Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country/model/types/country';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
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
        className,
        data,
        error,
        isLoading,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        readonly,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <HStack className={classNames(cls.ProfileCard, { [cls.loadiing]: true }, [className])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error occurred while loading')}
                    text={t('Try refreshing the page')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} alt="avatar" size={100} />
                </HStack>
            )}
            <Input
                value={data?.first}
                className={cls.input}
                placeholder={t('First name')}
                onChange={onChangeFirstname}
                readonly={readonly}
            />
            <Input
                value={data?.lastname}
                className={cls.input}
                placeholder={t('Last name')}
                onChange={onChangeLastname}
                readonly={readonly}
            />
            <Input
                value={data?.age}
                className={cls.input}
                placeholder={t('Age')}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                className={cls.input}
                placeholder={t('City')}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                className={cls.input}
                placeholder={t('Username')}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                className={cls.input}
                placeholder={t('Avatar')}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
