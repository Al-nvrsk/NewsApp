import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { isMobile } from '@/shared/lib/components/isMobile/isMobile';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string
    title?: DefaultTFuncReturn
    feedbackTitle?: DefaultTFuncReturn
    hasFeedback?: boolean
    onCancel?:(starsCount:number) => void
    onAccept?:(starsCount:number, feedback?: string) => void
    rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalopen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
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
                data-testid="RatingCard.Input"
                value={feedback}
                placeholder={t('your feedback')}
                onChange={setFeedBack}
            />
        </>
    );

    return (
        <Card
            className={classNames('', {}, [className])}
            max
            data-testid="RatingCard"
        >
            <VStack align="center" gap="8" max>
                <Text title={starsCount ? t('Thanks for rated') : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
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
                                    data-testid="RatingCard.Close"
                                    onClick={cancelHandler}
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    data-testid="RatingCard.Send"
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
