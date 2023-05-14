import { screen } from '@testing-library/react';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import AppRouter from './AppRouter';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    test('should render page', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('should show not found page', async () => {
        ComponentRender(<AppRouter />, {
            route: '/somePageName',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });
    test('should show redirect for not auth user', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    test('should show page for auth user', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: { id: '1' },
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });
    test('should show page for user without role', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: { id: '1' },
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('should show page for user with access role', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: { id: '1', roles: [UserRole.ADMIN] },
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
