import React, { useState, useEffect } from 'react'

import { useStateValue } from '../../../store'
import { emptyEvent } from '../../../defaults'

import * as S from './styledComponents'

const EventDetails = () => {
    const [
        { eventDetailsOpen, selectedEvent, selectedDay },
        dispatch
    ] = useStateValue()
    let [data, setData] = useState(emptyEvent)

    useEffect(() => {
        console.log(selectedEvent)
        setData(() => selectedEvent)
    }, [selectedEvent])

    useEffect(() => {
        setData(data => ({ ...data, date: selectedDay }))
    }, [selectedDay])

    let handleChange = (key, value) => {
        setData(data => ({ ...data, [key]: value }))
    }

    let formatDate = ({ year, month, day }) => {
        let formatted = new Date(year, month, day + 1).toISOString()
        return formatted.substring(0, formatted.indexOf('T'))
    }

    let reverseFormat = str => {
        let format = ['year', 'month', 'day']
        let data = str
            .split('-')
            .map((e, i) => (i == 1 ? parseInt(e - 1) : parseInt(e)))
        //because months are 0 indexed ^
        return data.reduce((prev, curr, i) => {
            return { ...prev, [format[i]]: curr }
        }, {})
    }

    let updateHours = (key, value) => {
        console.log(value)
        const { hours } = data
        return { ...hours, [key]: value }
    }
    return (
        <S.Container shown={eventDetailsOpen}>
            <S.Header>
                <span>{data._id ? 'Modify' : 'Create new event'}</span>
                {data._id && (
                    <S.Delete
                        onClick={() =>
                            dispatch({
                                type: 'DELETE_EVENT',
                                payload: data._id
                            })
                        }
                    />
                )}
            </S.Header>
            <S.Form>
                <S.Title htmlFor='title'>
                    <span>Title:</span>
                </S.Title>
                <S.Input
                    value={data.title}
                    type='text'
                    id='title'
                    onChange={({ target: { value } }) =>
                        handleChange('title', value)
                    }
                />

                <S.Date htmlFor='date'>
                    <span>Date:</span>
                </S.Date>

                <S.Input
                    value={formatDate(data.date)}
                    type='date'
                    id='date'
                    required={true}
                    onChange={({ target: { value } }) =>
                        handleChange('date', reverseFormat(value))
                    }
                />
                <S.Time htmlFor='start'>
                    <span>Start:</span>
                </S.Time>

                <S.Input
                    value={data.hours.start}
                    type='time'
                    id='date'
                    required={true}
                    onChange={({ target: { value } }) =>
                        handleChange('hours', updateHours('start', value))
                    }
                />
                <S.Time htmlFor='end'>
                    <span>End:</span>
                </S.Time>

                <S.Input
                    value={data.hours.end}
                    type='time'
                    id='date'
                    required={true}
                    onChange={({ target: { value } }) =>
                        handleChange('hours', updateHours('end', value))
                    }
                />
            </S.Form>

            <S.Actions>
                <S.Button
                    onClick={() =>
                        dispatch({
                            type: 'HIDE_EVENT_DETAILS'
                        })
                    }>
                    Cancel
                </S.Button>
                <S.Button
                    primary
                    onClick={() =>
                        dispatch({
                            type: data._id ? 'UPDATE_EVENT' : 'CREATE_EVENT',
                            payload: data
                        })
                    }>
                    Save
                </S.Button>
            </S.Actions>
        </S.Container>
    )
}

export default EventDetails
