import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/style/index.scss';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select',
    options: [
        { value: '123', content: 'some text' },
        { value: '321', content: 'another some text' },
    ],
};
