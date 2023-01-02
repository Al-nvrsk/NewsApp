import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ThemeProvider } from './providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from './providers/ErrorBoundary';
import './style/index.scss';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
