import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';

interface ScrollToolbarProps {
    className?: string
}

export const ScrollToolbar = memo(({ className }: ScrollToolbarProps) => {
    const { t } = useTranslation();
    return (
        <VStack justify="center" align="center" max className={classNames(cls.ScrollToolbar, {}, [className])}>
            <ScrollToTopButton />
        </VStack>
    );
});
