import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { CountrySelect, CurrencySelect } from '@/entities/Currency';
import { ProfileCardProps } from '../../../ProfileCard';

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation();

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
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                className={cls.input}
                placeholder={t('Last name')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
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
});
