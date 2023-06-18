import { useSelector } from 'react-redux';
import { getArticleDetailData } from '../../../../model/selectors/articleDetailsSelectors';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { renderArticleBlock } from '../../renderArticleBlock';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export const ArticleDetails = () => {
    const article = useSelector(getArticleDetailData);
    return (
        <>
            <Text
                title={article?.title}
                size="l"
                bold
            />
            <Text text={article?.subtitle} />
            <AppImage
                fallback={<Skeleton width="100%" height={420} border="16px" />}
                src={article?.img}
            />
            {article?.block?.map(renderArticleBlock)}
        </>
    );
};
