import React from 'react'
import ReactDom from 'react-dom'

import App from './components/App'

import { StateProvider } from './store'
import { rootReducer } from './reducers'

import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

import { getYearMonthDay } from './logic/functions'
import { defaultEvents } from './defaults'
ReactDom.render(
    <ThemeProvider theme={theme}>
        <StateProvider
            reducer={rootReducer}
            initialState={{
                displayDate: getYearMonthDay(),
                selectedDay: getYearMonthDay(),
                events: defaultEvents,
                eventDetailsOpen: false,
                selectedEvent: {}
            }}>
            <App />
        </StateProvider>
    </ThemeProvider>,
    document.getElementById('root')
)
