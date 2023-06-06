import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '@/page/ArticlesPage/model/selectors/articlesPageSelectors';
import { getArticles } from '@/page/ArticlesPage/model/slice/articlePageSlice';
import { Text } from '@/shared/ui/deprecated/Text';

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return (
            <Text text={t('Error from loading')} />
        );
    }

    return (
        <ArticleList
            isloading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
