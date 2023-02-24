import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
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
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('User profile')} />
                {canEdit && (
                    <div className={cls.btnWrapper}>
                        {readonly
                            ? (
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    className={cls.editBtn}
                                    onClick={onEdit}
                                >
                                    {t('Edit')}
                                </Button>
                            )
                            : (
                                <>
                                    <Button
                                        theme={ButtonTheme.OUTLINE_RED}
                                        className={cls.editBtn}
                                        onClick={onCancelEdit}
                                    >
                                        {t('Cancel')}
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.OUTLINE}
                                        className={cls.saveBtn}
                                        onClick={onSaveEdit}
                                    >
                                        {t('Save')}
                                    </Button>
                                </>
                            )}
                    </div>
                )}

            </div>
        </div>
    );
};
