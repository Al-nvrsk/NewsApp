import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';

const avatar = require('./avatar.test.jpg');

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//     data: {
//         username: 'nimda',
//         age: 77,
//         country: Country.Kazahstan,
//         lastname: 'user',
//         first: 'name',
//         city: 'town',
//         currency: Currency.USD,
//         avatar,
//     },
// };

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
