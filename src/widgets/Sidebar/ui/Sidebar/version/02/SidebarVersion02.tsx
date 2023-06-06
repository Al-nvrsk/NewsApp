import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarVersion02.module.scss';
import { AppLogo } from '@/shared/ui/AppLogo';

interface SidebarVersion02Props {
    className?: string
}

export const SidebarVersion02 = memo(({ className }: SidebarVersion02Props) => {
    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.SidebarRedesigned, {}, [className])}
        >
            <AppLogo className={cls.appLogo} />
        </aside>
    );
});
