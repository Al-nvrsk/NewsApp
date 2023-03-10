import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from 'page/ArticlesPage/model/selectors/articlesPageSelectors';
import { getArticles } from 'page/ArticlesPage/model/slice/articlePageSlice';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';

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
