import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTest from '@/shared/config/i18n/i18nForTests';
// eslint-disable-next-line forapp-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line forapp-plugin/layer-imports
import '@/app/style/index.scss';

export interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    theme?: Theme
}

interface TestProviderProps {
    children: ReactNode
    options?: ComponentRenderOptions
}

export function TestProvider(props: TestProviderProps) {
    const { children, options = {} } = props;
    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTest}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => render(
    <TestProvider options={options}>
        {component}
    </TestProvider>,
);
