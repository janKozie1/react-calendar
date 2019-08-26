import React from 'react'

import Todo from './Todo'
import { useStateValue } from '../../store'
import { getDayType, getDayName, getMonthName } from '../../logic/functions'

import * as S from './styledComponents'

const DayInfo = () => {
    let [
        {
            selectedDay: { year, month, day }
        },
        dispatch
    ] = useStateValue()
    console.log(getMonthName(year, month))
    return (
        <S.DayInfo>
            <S.Header>
                <S.Day>{day}</S.Day>
                <S.DayData>
                    <S.DayType>{getDayType(day)}</S.DayType>
                    <S.DayName>{getDayName(year, month, day).long}</S.DayName>
                </S.DayData>
            </S.Header>
            <S.MonthName>{getMonthName(year, month).long}</S.MonthName>
            <Todo />
        </S.DayInfo>
    )
}

export default DayInfo
