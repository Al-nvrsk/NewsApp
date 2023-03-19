import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { isMobile } from '@/shared/lib/components/isMobile/isMobile';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?:(starsCount:number) => void
    onAccept?:(starsCount:number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
    } = props;
    const { t } = useTranslation();
    const [isModalopen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedBack] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                placeholder={t('your feedback')}
                onChange={setFeedBack}
            />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            {isMobile()
                ? (
                    <Drawer
                        isOpen={isModalopen}
                        onClose={cancelHandler}
                        lazy
                    >
                        <VStack gap="32">
                            {modalContent}
                            <Button fullWidth onClick={acceptHandler}>
                                {t('Send')}
                            </Button>
                        </VStack>

                    </Drawer>
                )
                : (
                    <Modal isOpen={isModalopen} lazy>
                        {modalContent}
                        <VStack gap="32" max>
                            <HStack gap="16" max justify="end">
                                <Button
                                    onClick={cancelHandler}
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    onClick={acceptHandler}
                                >
                                    {t('Send')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                )}
        </Card>
    );
});
