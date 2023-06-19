import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlags, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

interface UiDesignSwitcherProps {
    className?: string
}

export const UiDesignSwitcher = memo(({ className }: UiDesignSwitcherProps) => {
    const { t } = useTranslation();
    const isAppRedesigned = getFeatureFlags('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);
    const forceUpdate = useForceUpdate();

    const items = [
        {
            content: t('New'),
            value: 'new',
        },
        {
            content: t('Old'),
            value: 'old',
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(updateFeatureFlag({
                userId: authData.id,
                newFeatures: {
                    isAppRedesigned: value === 'new',
                },
            })).unwrap();
            setIsLoading(false);
            forceUpdate();
        }
    };

    return (
        <HStack>
            <Text text={t('Interface option')} />
            {isLoading
                ? <Skeleton width={100} height={40} />
                : (
                    <ListBox
                        items={items}
                        onChange={onChange}
                        value={isAppRedesigned ? 'new' : 'old'}
                        className={className}
                    />
                )}
        </HStack>
    );
});
