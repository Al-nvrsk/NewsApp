import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button/Button';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card border="partial" padding="16" max>
                    <HStack max justify="between" className={classNames('', {}, [className])}>
                        <Text title={t('User profile')} />
                        {canEdit && (
                            <div>
                                {readonly
                                    ? (
                                        <Button
                                            variant="outline"
                                            onClick={onEdit}
                                            data-testid="EditableProfileCardHeader.EditButton"
                                        >
                                            {t('Edit')}
                                        </Button>
                                    )
                                    : (
                                        <HStack gap="8">
                                            <Button
                                                variant="outline"
                                                onClick={onCancelEdit}
                                                data-testid="EditableProfileCardHeader.CancelButton"
                                                color="error"
                                            >
                                                {t('Cancel')}
                                            </Button>
                                            <Button
                                                variant="outline"
                                                onClick={onSaveEdit}
                                                data-testid="EditableProfileCardHeader.SaveButton"
                                                color="success"
                                            >
                                                {t('Save')}
                                            </Button>
                                        </HStack>
                                    )}
                            </div>
                        )}
                    </HStack>
                </Card>
            )}
            off={(
                <HStack max justify="between" className={classNames('', {}, [className])}>
                    <TextDeprecated title={t('User profile')} />
                    {canEdit && (
                        <div>
                            {readonly
                                ? (
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onEdit}
                                        data-testid="EditableProfileCardHeader.EditButton"
                                    >
                                        {t('Edit')}
                                    </ButtonDeprecated>
                                )
                                : (
                                    <HStack gap="8">
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                        >
                                            {t('Cancel')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE}
                                            onClick={onSaveEdit}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                        >
                                            {t('Save')}
                                        </ButtonDeprecated>
                                    </HStack>
                                )}
                        </div>
                    )}
                </HStack>
            )}
        />

    );
};
