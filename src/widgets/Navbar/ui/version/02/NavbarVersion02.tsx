import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarVersion02.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { LoginModal } from '@/features/AuthByUsername';

interface NavbarVersion02Props {
    className?: string
    isAuthModal: boolean
    onCloseModal: () => void
}

export const NavbarVersion02 = memo((props: NavbarVersion02Props) => {
    const { className, isAuthModal, onCloseModal } = props;
    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    );
});
