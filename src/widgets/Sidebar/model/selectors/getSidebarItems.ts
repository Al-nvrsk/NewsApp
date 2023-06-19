import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
// Deprecated
import AboutIconDeprecated from '@/shared/assets/icons/deprecated/about.svg';
import MainIconDeprecated from '@/shared/assets/icons/deprecated/main.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/deprecated/profile.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/deprecated/article.svg';
// Redesigned
import AboutIcon from '@/shared/assets/icons/Info.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';

import { SidebarItemType } from '../types/SidebarType';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const sidebarItemList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => MainIcon,
                off: () => MainIconDeprecated,
            }),
            text: 'Main',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
            text: 'About',
        },
    ];

    if (userData) {
        sidebarItemList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                text: 'Profile',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ArticleIcon,
                    off: () => ArticleIconDeprecated,
                }),
                text: 'Articles',
                authOnly: true,
            },
        );
    }
    return sidebarItemList;
};
