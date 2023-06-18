import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import cls from './Navbar.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { NavbarVersion01 } from './version/01/NavbarVersion01';
import { NavbarVersion02 } from './version/02/NavbarVersion02';
import { Button } from '@/shared/ui/redesigned/Button/Button';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.NavbarRedesigned,
        off: () => cls.Navbar,
    });

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <NavbarVersion02
                        isAuthModal={isAuthModal}
                        onCloseModal={onCloseModal}
                    />
                )}
                off={(
                    <NavbarVersion01
                        className={cls.Navbar}
                        isAuthModal={isAuthModal}
                        onCloseModal={onCloseModal}
                    />
                )}
            />

        );
    }

    return (
        <header className={classNames(mainClass, {}, [className])}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <Button
                        variant="clear"
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Sign In')}
                    </Button>
                )}
                off={(
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Sign In')}
                    </ButtonDeprecated>
                )}
            />

            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
});
