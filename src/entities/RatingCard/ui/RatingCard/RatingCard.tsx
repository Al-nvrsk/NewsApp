import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/Modal';
import { isMobile } from '@/shared/lib/components/isMobile/isMobile';
import { Drawer } from '@/shared/ui/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button/Button';
import { Card } from '@/shared/ui/redesigned/Card';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        value={feedback}
                        placeholder={t('your feedback')}
                        onChange={setFeedBack}
                    />
                </>
            )}
            off={(
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        data-testid="RatingCard.Input"
                        value={feedback}
                        placeholder={t('your feedback')}
                        onChange={setFeedBack}
                    />
                </>
            )}
        />

    );

    const content = (
        <>
            <VStack align="center" gap="8" max>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text title={starsCount ? t('Thanks for rated') : title} />}
                    off={<TextDeprecated title={starsCount ? t('Thanks for rated') : title} />}
                />
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
                            <ToggleFeatures
                                feature="isAppRedesigned"
                                on={(
                                    <Button fullWidth onClick={acceptHandler} size="l">
                                        {t('Send')}
                                    </Button>
                                )}
                                off={(
                                    <ButtonDeprecated fullWidth onClick={acceptHandler} size={ButtonSize.L}>
                                        {t('Send')}
                                    </ButtonDeprecated>
                                )}
                            />
                        </VStack>
                    </Drawer>
                )
                : (
                    <Modal isOpen={isModalopen} lazy>
                        <VStack gap="32" max>
                            {modalContent}
                            <ToggleFeatures
                                feature="isAppRedesigned"
                                on={(
                                    <HStack gap="16" max justify="end">
                                        <Button
                                            data-testid="RatingCard.Close"
                                            onClick={cancelHandler}
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
                                )}
                                off={(
                                    <HStack gap="16" max justify="end">
                                        <ButtonDeprecated
                                            data-testid="RatingCard.Close"
                                            onClick={cancelHandler}
                                            theme={ButtonTheme.OUTLINE_RED}
                                        >
                                            {t('Cancel')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            data-testid="RatingCard.Send"
                                            onClick={acceptHandler}
                                        >
                                            {t('Send')}
                                        </ButtonDeprecated>
                                    </HStack>
                                )}
                            />
                        </VStack>
                    </Modal>
                )}
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card
                    padding="24"
                    max
                    border="round"
                    data-testid="RatingCard"
                >
                    {content}
                </Card>
            )}
            off={(
                <CardDeprecated
                    className={classNames('', {}, [className])}
                    max
                    data-testid="RatingCard"
                >
                    {content}
                </CardDeprecated>
            )}
        />

    );
});
