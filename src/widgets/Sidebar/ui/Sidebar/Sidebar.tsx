import { memo, useState } from 'react';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarVersion01 } from './version/01/SidebarVersion01';
import { SidebarVersion02 } from './version/02/SidebarVersion02';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const SidebarItemList = useSidebarItems();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <SidebarVersion02
                    collapsed={collapsed}
                    onToggle={onToggle}
                    SidebarItemList={SidebarItemList}
                    className={className}
                />
            )}
            off={(
                <SidebarVersion01
                    collapsed={collapsed}
                    onToggle={onToggle}
                    SidebarItemList={SidebarItemList}
                />
            )}
        />
    );
});
