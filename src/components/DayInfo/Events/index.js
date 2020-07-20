import React from 'react'

import { useStateValue } from '../../../store'
import { getMonthName, getDateObj } from '../../../logic/functions'
import { emptyEvent } from '../../../defaults'
import * as S from './styledComponents'

const Events = () => {
  const [{ events, selectedDay }, dispatch] = useStateValue()
  console.log(selectedDay)
  let openEventView = (data) => {
    dispatch({
      type: 'SHOW_EVENT_DETAILS',
      payload: data,
    })
  }
  return (
    <S.Container>
      <S.Title>
        Upcoming Events{' '}
        <S.Icon
          aria-label="add new event"
          onClick={() =>
            openEventView({
              ...emptyEvent,
              date: selectedDay,
            })
          }
        />
      </S.Title>
      <S.EventList aria-label="event list">
        {events
          .filter(
            (e) => getDateObj(e).getTime() > new Date(selectedDay.year, selectedDay.month, selectedDay.day).getTime(),
          )
          .map((e, i) => {
            return (
              <S.Event key={e._id} onClick={() => openEventView(e)}>
                <S.Completed></S.Completed>
                <S.EventDesc>
                  <S.EventTitle>{e.title}</S.EventTitle>
                  <S.EventDate>
                    {e.date.day} <span>{getMonthName(e.date.year, e.date.month).long}</span> / {e.hours.start} -{' '}
                    {e.hours.end}
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
