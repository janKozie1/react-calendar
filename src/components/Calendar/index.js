import React from 'react'

import { useStateValue } from '../../store'
import { dayNames, monthNames } from '../../constants'
import { getMonthData } from '../../logic/functions'

import Day from './Day'

import * as S from './styledComponents'

const Calendar = () => {
    let [
        {
            displayDate: { year, month },
            selectedDay,
            events
        },
        dispatch
    ] = useStateValue()
    let handleDaySelect = day => {
        dispatch({ type: 'SELECT_DAY', payload: day })
    }
    let monthData = getMonthData(year, month)
    return (
        <S.Calendar>
            <S.Header>
                <S.Month>
                    <S.Button
                        onClick={() =>
                            dispatch({
                                type: 'CHANGE_DISPLAY_DATE',
                                payload: { year, month: month - 1 }
                            })
                        }>
                        <S.Icon />
                    </S.Button>
                    <span>{monthNames[month].long}</span>
                    <S.Button
                        mirrored
                        onClick={() =>
                            dispatch({
                                type: 'CHANGE_DISPLAY_DATE',
                                payload: { year, month: month + 1 }
                            })
                        }>
                        <S.Icon />
                    </S.Button>
                </S.Month>
                <S.Year>
                    <span>{year}</span>
                </S.Year>
            </S.Header>

            <S.Days>
                <>
                    {dayNames.map(({ short }) => (
                        <S.DayName key={short}>{short}</S.DayName>
                    ))}
                </>
                <>
                    {monthData.map(e => (
                        <Day
                            key={`${e.year}-${e.month}-${e.day}`}
                            data={e}
                            currentMonth={month}
                            selectedDay={selectedDay}
                            onClick={handleDaySelect}
                            events={events}
                        />
                    ))}
                </>
            </S.Days>
        </S.Calendar>
    )
}

export default Calendar
