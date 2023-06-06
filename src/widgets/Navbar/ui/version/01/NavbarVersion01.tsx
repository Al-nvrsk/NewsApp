import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarVersion01.module.scss';
import { TextTheme, Text } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { LoginModal } from '@/features/AuthByUsername';
import { getRouteArticleCreate } from '@/shared/const/router';

interface NavbarVersion01Props {
    className?: string
    isAuthModal: boolean
    onCloseModal: () => void
}

export const NavbarVersion01 = memo((props: NavbarVersion01Props) => {
    const { className, isAuthModal, onCloseModal } = props;
    const { t } = useTranslation();
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text className={cls.appName} title={t('News App')} theme={TextTheme.INVERTED} />
            <AppLink
                to={getRouteArticleCreate()}
                theme={AppLinkTheme.SECONDARY}
            >
                {t('Create new Article')}
            </AppLink>
            <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    );
});
