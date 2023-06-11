import { memo } from 'react';
import { ArticleListItemProps } from '../../model/types/ArticleListItemProps';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItem as ArticleListItemDeprecated } from './version/01/ArticleListItem';
import { ArticleListItem as ArticleListItemRedesigned } from './version/02/ArticleListItem';

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ArticleListItemRedesigned {...props} />}
            off={<ArticleListItemDeprecated {...props} />}
        />
    );
});
