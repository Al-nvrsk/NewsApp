import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export function AppRouter() {
    const { t } = useTranslation('translation');
    return (
        <Suspense fallback={(
            <div>
                {t('Loading...')}
            </div>
        )}
        >
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                )) }
            </Routes>
        </Suspense>
    );
}
