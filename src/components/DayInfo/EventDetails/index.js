import React, { useState } from 'react'

import { useStateValue } from '../../../store'

import * as S from './styledComponents'

const EventDetails = () => {
    const [{ eventDetailsOpen, selectedEvent }, dispatch] = useStateValue()
    console.log(eventDetailsOpen)
    return (
        <S.Container shown={eventDetailsOpen}>
            <S.Button
                onClick={() =>
                    dispatch({
                        type: 'HIDE_EVENT_DETAILS',
                        payload: {}
                    })
                }>
                Cancel
            </S.Button>
            <S.Button primary>Save</S.Button>
        </S.Container>
    )
}

export default EventDetails
