import { useSelector } from 'react-redux';
import { getArticleDetailData } from '../../../../model/selectors/articleDetailsSelectors';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { TextSize, Text } from '@/shared/ui/deprecated/Text';
import { renderArticleBlock } from '../../renderArticleBlock';
import cls from './ArticleDetails.module.scss';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/deprecated/eye.svg';
import CalendarIcon from '@/shared/assets/icons/deprecated/calendar.svg';

export const ArticleDetails = () => {
    const article = useSelector(getArticleDetailData);
    return (
        <>
            <HStack justify="center" max className={cls.avatarWrapper}>
                <Avatar size={200} src={article?.img} className={cls.avatar} />
            </HStack>
            <VStack
                gap="4"
                max
                data-testid="ArticleDetails.Info"
            >
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <HStack gap="8" className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack gap="8" className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.block?.map(renderArticleBlock)}
        </>
    );
};
