import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Button } from '@/shared/ui/redesigned/Button/Button';

interface ArticleAdditionalInfoProps {
    className?: string
    author: User
    createdAt: string
    views: number
    onEdit: () => void
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
    const {
        className, author, createdAt, views, onEdit,
    } = props;
    const { t } = useTranslation();
    return (
        <VStack
            gap="32"
            className={className}
        >
            <HStack gap="8">
                <Avatar src={author.avatar} size={32} />
                <Text text={author.username} bold />
                <Text text={createdAt} bold />
            </HStack>
            <Button onClick={onEdit}>
                {t('Edit')}
            </Button>
            <Text text={t('view', { count: Number(views) })} bold />
        </VStack>
    );
});
