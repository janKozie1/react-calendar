import React from 'react'

import { useStateValue } from '../../../store'
import { getMonthName } from '../../../logic/functions'

import * as S from './styledComponents'

const Events = () => {
    const [{ events }, dispatch] = useStateValue()
    console.log(events)
    return (
        <S.Container>
            <S.Title>
                Upcoming Events <S.Icon />
            </S.Title>
            <S.EventList>
                {events.map((e, i) => {
                    return (
                        <S.Event>
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
                        </S.Event>
                    )
                })}
            </S.EventList>
        </S.Container>
    )
}

export default Events
