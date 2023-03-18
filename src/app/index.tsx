import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ThemeProvider } from './providers/ThemeProvider';
import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from './providers/ErrorBoundary';
import './style/index.scss';
import { StoreProvider } from './providers/StoreProvider';

const container = document.getElementById('root');

if (!container) {
    throw new Error('conteiner is absent');
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
