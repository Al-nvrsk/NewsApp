import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text/Text';

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack
            gap="8"
            className={classNames('', {}, [className])}
            data-testid="ArticleRecommendationsList"
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <Text
                        size="l"
                        title={t('Recommendatins')}
                    />
                )}
                off={(
                    <TextDeprecated
                        size={TextSize.L}
                        title={t('Recommendatins')}
                    />
                )}
            />

            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});
