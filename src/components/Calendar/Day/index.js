import React from 'react'

import { isThisDay } from '../../../logic/functions'

import * as S from './styledComponents.js'

const Day = ({
    data: { year, month, day },
    currentMonth,
    selectedDay,
    onClick,
    events,
    eventDetailsOpen
}) => {
    let isInCurrentMonth = currentMonth === month
    let isSelected = isThisDay({ year, month, day }, selectedDay)
    let hasEvent = Boolean(
        events.filter(({ date }) => isThisDay(date, { year, month, day }))
            .length
    )
    return (
        <S.Day
            onClick={() => onClick({ year, month, day })}
            isSelected={isSelected}
            hasEvent={hasEvent}
            isInCurrentMonth={isInCurrentMonth}
            day={day}>
            {day}
        </S.Day>
    )
}

export default Day
