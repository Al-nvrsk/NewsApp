import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersConteinerProps {
    className?: string
}

export const FiltersConteiner = memo(({ className }: FiltersConteinerProps) => {
    const {
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
        order,
        search,
        sort,
        type,
    } = useArticleFilters();
    return (
        <ArticlesFilters
            type={type}
            sort={sort}
            order={order}
            search={search}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            className={className}
        />
    );
});
