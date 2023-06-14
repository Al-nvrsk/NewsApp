import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { StickyContentLayout } from '@/shared/layouts';
import { DetailsConteiner } from '../DetailsConteiner/DetailsConteiner';
import { AdditionalInfoConteiner } from '../AdditionalInfoConteiner/AdditionalInfoConteiner';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducer={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <StickyContentLayout
                        content={(
                            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                                <VStack gap="16" max>
                                    <DetailsConteiner />
                                    <ArticleRating articleId={id} />
                                    <ArticleRecommendationsList />
                                    <ArticleDetailsComments id={id!} />
                                </VStack>
                            </Page>
                        )}
                        right={<AdditionalInfoConteiner />}
                    />
                )}
                off={(
                    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                        <VStack gap="16" max>
                            <ArticleDetailsPageHeader />
                            <ArticleDetails id={id!} />
                            <ToggleFeatures
                                feature="isArticleRatingEnabled"
                                on={<ArticleRating articleId={id} />}
                                off={(
                                    <Card>
                                        {t('Article rating will be added soon')}
                                    </Card>
                                )}
                            />
                            <ArticleRecommendationsList />
                            <ArticleDetailsComments id={id!} />
                        </VStack>
                    </Page>
                )}
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
