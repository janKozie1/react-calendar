import React from 'react'

import * as S from './styledComponents.js'

const Day = ({
    data: { year, month, day },
    currentMonth,
    selectedDay,
    onClick
}) => {
    let isInCurrentMonth = currentMonth === month
    let isSelected =
        day === selectedDay.day &&
        month === selectedDay.month &&
        year === selectedDay.year
    return (
        <S.Day
            onClick={() => onClick({ year, month, day })}
            isSelected={isSelected}
            isInCurrentMonth={isInCurrentMonth}
            day={day}>
            {day}
        </S.Day>
    )
}

export default Day
