import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';

interface SettingsPageProps {
    className?: string
}

const SettingsPage = memo(({ className }: SettingsPageProps) => {
    const { t } = useTranslation();
    return (
        <Page>
            <VStack gap="16">
                <Text title={t('Settings')} />
                <UiDesignSwitcher />
            </VStack>

        </Page>
    );
});

export default SettingsPage;
