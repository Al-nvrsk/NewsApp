import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarVersion02.module.scss';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { SideBarItem } from '../../../SidebarItem/SidebarItem';
import { VStack } from '@/shared/ui/Stack';
import { SidebarItemType } from '../../../../model/types/SidebarType';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

interface SidebarVersion02Props {
    className?: string
    SidebarItemList: SidebarItemType[]
    collapsed: boolean
    onToggle: () => void
}

export const SidebarVersion02 = memo((props: SidebarVersion02Props) => {
    const {
        className, SidebarItemList, collapsed, onToggle,
    } = props;
    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.SidebarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [className])}
        >
            <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
            <VStack role="navigation" gap="8" className={cls.items}>
                {SidebarItemList.map((item) => (
                    <SideBarItem
                        item={item}
                        key={item.path}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>
            <Icon
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                Svg={ArrowIcon}
                clickable
            />
            <div className={cls.swithers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
});
