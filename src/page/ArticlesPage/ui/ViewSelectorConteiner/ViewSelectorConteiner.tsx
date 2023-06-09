import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorConteinerProps {
    className?: string
}

export const ViewSelectorConteiner = memo(({ className }: ViewSelectorConteinerProps) => {
    const { view, onChangeView } = useArticleFilters();

    return (
        <ArticleViewSelector className={className} view={view} onViewClick={onChangeView} />
    );
});
