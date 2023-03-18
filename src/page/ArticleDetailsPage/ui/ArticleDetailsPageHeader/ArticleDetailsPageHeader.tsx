import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { getArticleDetailData } from '@/entities/Article';
import { getCanEditArticle } from '@/page/ArticleDetailsPage/model/selectors/article';
import { HStack } from '@/shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack
            justify="between"
            className={classNames('', {}, [className])}
            max
        >
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Back to list')}
            </Button>
            {canEdit && (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Edit')}
                </Button>
            )}
        </HStack>
    );
});
