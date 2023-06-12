import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/Stack';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isloading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view:ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            view={view}
            className={cls.card}
        />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation('article');
    const {
        className,
        articles,
        isloading,
        view = ArticleView.SMALL,
        target,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    if (!isloading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text
                    size={TextSize.L}
                    title={t('Article did not found')}
                />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <HStack
                    wrap="wrap"
                    gap="16"
                    className={classNames(cls.ArticleListRedesigned, {}, [])}
                    data-testid="ArticleList"
                >
                    {articles.length > 0
                        ? articles.map(renderArticle)
                        : null}
                    {isloading && getSkeletons(view)}
                </HStack>
            )}
            off={(
                <div
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                    data-testid="ArticleList"
                >
                    {articles.length > 0
                        ? articles.map(renderArticle)
                        : null}
                    {isloading && getSkeletons(view)}
                </div>
            )}
        />
    );
});
