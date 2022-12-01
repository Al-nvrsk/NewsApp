import { render } from 'react-dom'
import { App } from './App' 

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider'

import 'shared/config/i18n/i18n'

render (
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
document.getElementById('root')
)
