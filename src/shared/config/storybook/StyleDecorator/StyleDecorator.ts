import { Story } from '@storybook/react';
// eslint-disable-next-line forapp-plugin/layer-imports
import '../../../../app/style/index.scss';
// /app/styles/index.scss';

export const StyleDecorator = (story: () => Story) => story();
