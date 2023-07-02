import { Story } from '@storybook/react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeaturesFlags } from '@/shared/lib/features';

export const FeaturesFlagsDecorator = (features: FeatureFlags) => (StoryComponent: Story) => {
    setFeaturesFlags(features);
    return (
        <StoryComponent />
    );
};
