import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleListItemProps } from '../../../../model/types/ArticleListItemProps';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleTextBlock } from '../../../../model/types/article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button/Button';
import { ArticleBlockType, ArticleView } from '../../../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, article, view, target,
    } = props;
    const { t } = useTranslation('article');

    const types = <Text text={article.type?.join(', ')} className={cls.type} />;
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.block.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                max
                padding="24"
                // className={cls.card}
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                data-testid="ArticleListItem"
            >
                <VStack gap="16" max>
                    <HStack gap="8" max>
                        <Avatar size={32} src={article.user.avatar} />
                        <Text bold text={article.user.username} />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text bold title={article.title} />
                    <Text title={article.subtitle} size="s" />
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            className={cls.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack max justify="between">
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button variant="outline">
                                {t('Read more...') }
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            target={target}
            data-testid="ArticleListItem"
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
