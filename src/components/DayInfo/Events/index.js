import React from 'react'

import { useStateValue } from '../../../store'
import { getMonthName } from '../../../logic/functions'
import { emptyEvent } from '../../../defaults'
import * as S from './styledComponents'

const Events = () => {
    const [{ events }, dispatch] = useStateValue()
    let openEventView = data => {
        dispatch({
            type: 'SHOW_EVENT_DETAILS',
            payload: data
        })
    }
    return (
        <S.Container>
            <S.Title>
                Upcoming Events{' '}
                <S.Icon onClick={() => openEventView(emptyEvent)} />
            </S.Title>
            <S.EventList>
                {events.map((e, i) => {
                    return (
                        <S.Event key={e._id} onClick={() => openEventView(e)}>
                            <S.Completed></S.Completed>
                            <S.EventDesc>
                                <S.EventTitle>{e.title}</S.EventTitle>
                                <S.EventDate>
                                    {e.date.day}{' '}
                                    <span>
                                        {
                                            getMonthName(
                                                e.date.year,
                                                e.date.month
                                            ).long
                                        }
                                    </span>{' '}
                                    / {e.hours.start} - {e.hours.end}
                                </S.EventDate>
                            </S.EventDesc>
                            <S.IconContainer>
                                <S.Continue />
                            </S.IconContainer>
                        </S.Event>
                    )
                })}
            </S.EventList>
        </S.Container>
    )
}

export default Events
