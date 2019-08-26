import React, { useState, useEffect } from 'react'

import { useStateValue } from '../../../store'
import { emptyEvent } from '../../../defaults'

import * as S from './styledComponents'

const EventDetails = () => {
    const [{ eventDetailsOpen, selectedEvent }, dispatch] = useStateValue()
    let [data, setData] = useState(emptyEvent)
    console.log(data)
    useEffect(() => {
        setData(() => selectedEvent)
    }, [selectedEvent])

    return (
        <S.Container shown={eventDetailsOpen}>
            <S.Title>
                <span>Title</span>
                <S.Input
                    value={data.title}
                    onChange={() => console.log('?')}
                ></S.Input>
            </S.Title>
            <S.Actions>
                <S.Button
                    onClick={() =>
                        dispatch({
                            type: 'HIDE_EVENT_DETAILS'
                        })
                    }
                >
                    Close
                </S.Button>
                <S.Button primary>Save</S.Button>
            </S.Actions>
        </S.Container>
    )
}

export default EventDetails
