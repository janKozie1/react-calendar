import React from 'react'
import ReactDom from 'react-dom'

import App from './components/App'

import { StateProvider } from './store'
import { rootReducer } from './reducers'

import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
ReactDom.render(
    <ThemeProvider theme={theme}>
        <StateProvider reducer={rootReducer} initialState={{ owo: '1' }}>
            <App />
        </StateProvider>
    </ThemeProvider>,
    document.getElementById('root')
)
