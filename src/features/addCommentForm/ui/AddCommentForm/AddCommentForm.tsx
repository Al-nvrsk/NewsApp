import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getAddCommentFormText }
    from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text:string) => void
}

const redicers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation('main');
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value:string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text);
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducer={redicers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <Card padding="24" border="round" max>
                        <HStack
                            data-testid="AddCommentForm"
                            justify="between"
                            max
                            gap="16"
                            className={classNames(cls.AddCommentFormRedesigned, {}, [className])}
                        >
                            <Input
                                data-testid="AddCommentForm.Input"
                                className={cls.input}
                                placeholder={t('Input comment text')}
                                value={text}
                                onChange={onCommentTextChange}
                            />
                            <Button
                                data-testid="AddCommentForm.Button"
                                onClick={onSendHandler}
                            >
                                {t('Send')}
                            </Button>
                        </HStack>
                    </Card>
                )}
                off={(
                    <HStack
                        data-testid="AddCommentForm"
                        justify="between"
                        max
                        className={classNames(cls.AddCommentForm, {}, [className])}
                    >
                        <InputDeprecated
                            data-testid="AddCommentForm.Input"
                            className={cls.input}
                            placeholder={t('Input comment text')}
                            value={text}
                            onChange={onCommentTextChange}
                        />
                        <ButtonDeprecated
                            data-testid="AddCommentForm.Button"
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSendHandler}
                        >
                            {t('Send')}
                        </ButtonDeprecated>
                    </HStack>
                )}
            />

        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
