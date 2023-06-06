import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';
import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import cls from './NotificationButton.module.scss';
import { isMobile } from '@/shared/lib/components/isMobile/isMobile';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <div>
            {isMobile()
                ? (
                    <>
                        {trigger}
                        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationList />
                        </Drawer>
                    </>
                )
                : (
                    <Popover
                        className={classNames(cls.NotificationButton, {}, [className])}
                        direction="bottom left"
                        trigger={trigger}
                    >
                        <NotificationList
                            className={cls.notifications}
                        />
                    </Popover>
                ) }
        </div>

    );
});
