import { HTMLAttributeAnchorTarget } from 'react';
import { ArticleView } from '../consts/articleConsts';
import { Article } from './article';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}
