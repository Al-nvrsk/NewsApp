import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { getArticleDetailError, getArticleDetailIsLoading }
    from '../../model/selectors/articleDetailsSelectors';
import cls from './ArticleDetails.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetails as ArticleDetailsDeprecated } from './version/01/ArticleDetails';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';
import { ArticleDetails as ArticleDetailsRedesigned } from './version/02/ArticleDetails';

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailIsLoading);
    const error = useSelector(getArticleDetailError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = <ArticleDetailsSkeleton />;
    } else if (error) {
        content = (
            <TextDeprecated
                align={TextAlign.CENTER}
                text={t('An error occurred while loading')}
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ArticleDetailsRedesigned />}
                off={<ArticleDetailsDeprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducer={reducers} removeAfterUnmount>
            <VStack gap="16" max className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
