import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardError = () => {
    const { t } = useTranslation();
    return (
        <HStack justify="center" max>
            <Text
                variant="error"
                title={t('An error occurred while loading')}
                text={t('Try refreshing the page')}
                align="center"
            />
        </HStack>
    );
};
