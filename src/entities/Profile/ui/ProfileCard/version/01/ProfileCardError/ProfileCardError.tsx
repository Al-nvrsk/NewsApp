import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/Stack';
import { TextAlign, TextTheme, Text } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardError.module.scss';

export const ProfileCardError = () => {
    const { t } = useTranslation();
    return (
        <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [cls.error])}>
            <Text
                theme={TextTheme.ERROR}
                title={t('An error occurred while loading')}
                text={t('Try refreshing the page')}
                align={TextAlign.CENTER}
            />
        </HStack>
    );
};
