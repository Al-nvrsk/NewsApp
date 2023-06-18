import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { DynamicModuleLoader, ReducerList }
    from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { VStack } from '@/shared/ui/Stack';

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader
            reducer={initialReducers}
            removeAfterUnmount
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <VStack gap="16" className={classNames(cls.LoginForm, {}, [className])}>
                        <Text title={t('Authorization form')} />
                        {error && <Text variant="error" text={t('Wrong login or password')} />}
                        <Input
                            type="text"
                            autofocus
                            className={cls.input}
                            placeholder={t('Input Username')}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <Input
                            type="text"
                            className={cls.input}
                            placeholder={t('Input Password')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <Button
                            className={cls.loginbtn}
                            variant="outline"
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </Button>
                    </VStack>
                )}
                off={(
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t('Authorization form')} />
                        {error && <TextDeprecated theme={TextTheme.ERROR} text={t('Wrong login or password')} />}
                        <InputDeprecated
                            type="text"
                            autofocus
                            className={cls.input}
                            placeholder={t('Input Username')}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            placeholder={t('Input Password')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            className={cls.loginbtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    </div>
                )}
            />

        </DynamicModuleLoader>
    );
});

export default LoginForm;
