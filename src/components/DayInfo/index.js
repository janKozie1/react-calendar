import React from 'react'

import Events from './Events'
import EventDetails from './EventDetails'

import { useStateValue } from '../../store'
import { getDayType, getDayName, getMonthName } from '../../logic/functions'

import * as S from './styledComponents'

const DayInfo = () => {
    let [
        {
            selectedDay: { year, month, day },
            eventDetailsOpen
        },
        dispatch
    ] = useStateValue()
    return (
        <S.Container>
            <S.DayInfo shown={!eventDetailsOpen}>
                <S.Header>
                    <S.Day>{day}</S.Day>
                    <S.DayData>
                        <S.DayType>{getDayType(day)}</S.DayType>
                        <S.DayName>
                            {getDayName(year, month, day).long}
                        </S.DayName>
                    </S.DayData>
                </S.Header>
                <S.MonthName>{getMonthName(year, month).long}</S.MonthName>
                <Events />
            </S.DayInfo>

            <EventDetails />
        </S.Container>
    )
}

export default DayInfo
