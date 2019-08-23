import React from 'react'
import ReactDom from 'react-dom'

import App from './components/App'

import { StateProvider } from './store'
import { rootReducer } from './reducers'

import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

import { createMonthData } from './logic/functions'
ReactDom.render(
    <ThemeProvider theme={theme}>
        <StateProvider
            reducer={rootReducer}
            initialState={{ monthData: createMonthData() }}>
            <App />
        </StateProvider>
    </ThemeProvider>,
    document.getElementById('root')
)
