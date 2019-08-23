import React from 'react'

import * as S from './styledComponents.js'

const Day = ({ data, currentMonth }) => {
    let isInCurrentMonth = currentMonth === data.month
    return (
        <S.Day isInCurrentMonth={isInCurrentMonth} day={data.day}>
            {data.day}
        </S.Day>
    )
}

export default Day
