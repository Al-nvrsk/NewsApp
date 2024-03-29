import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack
                data-testid="CommentCard.Loading"
                gap="8"
                max
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
            >
                <div className={cls.header}>
                    <Skeleton height={30} width={30} border="50%" />
                    <Skeleton height={15} width={100} className={cls.username} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card padding="24" border="round" max>
                    <VStack
                        data-testid="CommentCard.Content"
                        gap="8"
                        max
                        className={classNames(cls.CommentCardRedesigned, {}, [className])}
                    >
                        <AppLink to={getRouteProfile(comment?.user.id)}>
                            <HStack>
                                {comment?.user.avatar
                                    ? <Avatar size={30} src={comment?.user.avatar} />
                                    : null}
                                <Text text={comment?.user.username} bold />
                            </HStack>
                        </AppLink>
                        <Text text={comment?.text} />
                    </VStack>
                </Card>
            )}
            off={(
                <VStack
                    data-testid="CommentCard.Content"
                    gap="8"
                    max
                    className={classNames(cls.CommentCard, {}, [className])}
                >
                    <AppLinkDeprecated className={cls.header} to={getRouteProfile(comment?.user.id)}>
                        {comment?.user.avatar ? <AvatarDeprecated size={30} src={comment?.user.avatar} /> : null}
                        <TextDeprecated className={cls.username} title={comment?.user.username} />
                    </AppLinkDeprecated>
                    <TextDeprecated className={cls.text} text={comment?.text} />
                </VStack>
            )}
        />

    );
});
