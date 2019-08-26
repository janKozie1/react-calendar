import React from 'react'
import ReactDom from 'react-dom'

import App from './components/App'

import { StateProvider } from './store'
import { rootReducer } from './reducers'

import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

import { getYearMonthDay } from './logic/functions'
ReactDom.render(
    <ThemeProvider theme={theme}>
        <StateProvider
            reducer={rootReducer}
            initialState={{
                displayDate: getYearMonthDay(),
                selectedDay: getYearMonthDay(),
                events: [
                    {
                        title: 'Exercise',
                        date: getYearMonthDay(new Date(2019, 8, 27)),
                        hours: {
                            start: '16:30',
                            end: '19:20'
                        }
                    },
                    {
                        title: 'Meeting',
                        date: getYearMonthDay(new Date(2019, 8, 28)),
                        hours: {
                            start: '11:10',
                            end: '12:05'
                        }
                    },
                    {
                        title: 'Dance practice',
                        date: getYearMonthDay(new Date(2019, 8, 30)),
                        hours: {
                            start: '14:00',
                            end: '14:50'
                        }
                    }
                ]
            }}>
            <App />
        </StateProvider>
    </ThemeProvider>,
    document.getElementById('root')
)
